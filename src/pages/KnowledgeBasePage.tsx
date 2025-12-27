import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Search, ExternalLink, Clock, CheckCircle, CircleCheck, Info, Sparkles, AlertTriangle, XCircle, ShieldAlert } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
export function KnowledgeBasePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || searchParams.get('search') || '';
  const [search, setSearch] = useState(queryParam);
  const [category, setCategory] = useState('All');
  const readArticles = useAppStore(s => s.readArticles);
  const toggleReadArticle = useAppStore(s => s.toggleReadArticle);
  const isTyping = useRef(false);
  useEffect(() => {
    if (!isTyping.current && queryParam !== search) {
      setSearch(queryParam);
    }
  }, [queryParam, search]);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (search) {
        setSearchParams({ q: search }, { replace: true });
      } else if (queryParam) {
        setSearchParams({}, { replace: true });
      }
      isTyping.current = false;
    }, 400);
    return () => clearTimeout(handler);
  }, [search, setSearchParams, queryParam]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isTyping.current = true;
    setSearch(e.target.value);
  };
  const filtered = KNOWLEDGE_ARTICLES.filter(a => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      a.title.toLowerCase().includes(searchLower) ||
      a.content.toLowerCase().includes(searchLower) ||
      a.summary.toLowerCase().includes(searchLower) ||
      (a.metadata?.source?.toLowerCase() || '').includes(searchLower) ||
      (a.metadata?.stage?.toLowerCase() || '').includes(searchLower);
    const matchesCategory = category === 'All' || a.category === category || a.category.includes(category);
    return matchesSearch && matchesCategory;
  });
  const clearFilters = () => {
    isTyping.current = false;
    setSearch('');
    setCategory('All');
    setSearchParams({});
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12 space-y-8">
        <div className="bg-nysc-green-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold">Verified Knowledge Base</h1>
            <p className="text-nysc-green-100 font-medium">Browse through official rules, survival tips, and clearance procedures.</p>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-nysc-gold" />
              <Input
                placeholder="Search redeployment, sanctions, routine, packing, POP, rules..."
                className="pl-10 h-14 bg-white text-gray-900 border-none focus-visible:ring-2 focus-visible:ring-nysc-gold shadow-lg rounded-2xl"
                value={search}
                onChange={handleSearchChange}
              />
              {search && (
                <button
                  onClick={() => { setSearch(''); setSearchParams({}); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs value={category} onValueChange={setCategory} className="w-full md:w-auto">
            <TabsList className="bg-white border rounded-xl p-1 shadow-sm h-auto flex flex-wrap gap-1">
              {['All', 'Official', 'Survival', 'CDS', 'Advisory'].map((cat) => (
                <TabsTrigger key={cat} value={cat} className="px-4 py-2 font-bold text-[10px] uppercase tracking-widest rounded-lg">
                  {cat === 'All' ? 'All Topics' : cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-black uppercase tracking-widest px-4 py-2 bg-gray-50 rounded-full border shadow-inner">
            <Badge variant="secondary" className="bg-nysc-green-50 text-nysc-green-800 border-nysc-green-100">{readArticles.length} Read</Badge>
            <span>•</span>
            <span>{KNOWLEDGE_ARTICLES.length} Available</span>
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TooltipProvider>
              {filtered.map(article => {
                const isRead = readArticles.includes(article.id);
                const isFeatured = article.metadata?.featured;
                const isHighRisk = article.metadata?.risk === 'high';
                const isMediumRisk = article.metadata?.risk === 'medium';
                return (
                  <Card
                    key={article.id}
                    className={cn(
                      "hover:shadow-2xl transition-all duration-300 group border-gray-100 flex flex-col h-full relative rounded-3xl overflow-hidden min-h-[220px] transition-colors",
                      isHighRisk
                        ? "ring-2 ring-destructive bg-red-50/30 shadow-lg shadow-red-100/50 animate-pulse-subtle"
                        : isFeatured
                          ? "ring-2 ring-nysc-gold bg-amber-50/10 shadow-nysc-gold/5"
                          : "bg-white"
                    )}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-wrap gap-2 mb-1">
                          <div className="text-[10px] font-bold text-nysc-green-800 uppercase tracking-widest">{article.category}</div>
                          {isHighRisk && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge className="bg-destructive text-[8px] h-4 uppercase px-1.5 font-black flex items-center gap-1 cursor-help animate-pulse">
                                  <ShieldAlert className="w-2.5 h-2.5" /> Risk Alert
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent className="bg-destructive text-white border-none font-bold">Strict penalties for policy violations</TooltipContent>
                            </Tooltip>
                          )}
                          {isFeatured && !isHighRisk && (
                            <Badge className="bg-nysc-gold text-white text-[8px] h-4 uppercase px-1.5 font-black flex items-center gap-1">
                              <Sparkles className="w-2 h-2" /> Featured
                            </Badge>
                          )}
                        </div>
                        {isRead && <CircleCheck className="w-4 h-4 text-nysc-green-500" />}
                      </div>
                      <CardTitle className={cn("text-xl group-hover:text-nysc-green-800 transition-colors leading-tight font-display font-bold", isHighRisk && "text-destructive")}>
                        {article.title}
                      </CardTitle>
                      {article.metadata?.source && (
                        <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-widest mt-1 opacity-70">
                          Source: {article.metadata.source} | 2025 Edition
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-medium">{article.summary}</p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400">
                          <Clock className="w-3 h-3" /> ~5 min read
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={cn(
                                "h-10 gap-2 font-bold rounded-xl transition-colors",
                                isHighRisk ? "text-destructive hover:bg-red-50" : "text-nysc-green-800 hover:text-nysc-green-900 hover:bg-nysc-green-50"
                              )}
                            >
                              Read Guide <ExternalLink className="w-3 h-3" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 border-none rounded-3xl overflow-hidden shadow-2xl">
                            <DialogHeader className={cn("p-8 pb-4 border-b", isHighRisk ? "bg-red-50/50" : "bg-gray-50")}>
                              <div className="text-[10px] font-bold text-nysc-green-800 uppercase tracking-widest mb-1 flex items-center gap-2 flex-wrap">
                                {article.category}
                                {isHighRisk && <span className="text-destructive font-black flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> HIGH PRIORITY ADVISORY</span>}
                                {isFeatured && <span className="text-nysc-gold font-black">• Featured</span>}
                              </div>
                              <DialogTitle className={cn("text-3xl font-display font-bold leading-tight", isHighRisk && "text-destructive")}>{article.title}</DialogTitle>
                              <DialogDescription className="text-base text-muted-foreground font-medium mt-2">
                                {article.summary}
                              </DialogDescription>
                            </DialogHeader>
                            <ScrollArea className="flex-1 p-8 pt-6">
                              <div className="prose prose-sm text-muted-foreground space-y-6 leading-relaxed max-w-none">
                                <div className="whitespace-pre-wrap text-[15px] text-gray-700 leading-loose font-medium">
                                  {article.content}
                                </div>
                              </div>
                            </ScrollArea>
                            <DialogFooter className="p-6 bg-white border-t flex flex-row items-center justify-between sm:justify-between">
                              <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Official Source</span>
                                <span className="text-xs font-bold">{article.metadata?.source || 'Verified NYSC Guidelines'}</span>
                              </div>
                              <Button
                                onClick={() => toggleReadArticle(article.id)}
                                className={cn(
                                  "h-12 px-6 rounded-xl font-bold transition-all active:scale-95",
                                  readArticles.includes(article.id)
                                    ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    : isHighRisk
                                      ? "bg-destructive hover:bg-red-700 shadow-lg shadow-destructive/20"
                                      : "bg-nysc-green-800 hover:bg-nysc-green-900 shadow-lg shadow-nysc-green-800/20"
                                )}
                              >
                                {readArticles.includes(article.id) ? "Mark as Unread" : <><CheckCircle className="w-4 h-4 mr-2" /> Mark as Mastered</>}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TooltipProvider>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 border-2 border-dashed rounded-3xl bg-gray-50/50">
            <Search className="w-12 h-12 text-gray-300" />
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900">No matching articles</h3>
              <p className="text-muted-foreground max-w-xs font-medium">Try adjusting your keywords or category filter.</p>
            </div>
            <Button variant="outline" onClick={clearFilters} className="font-bold border-gray-200">
              Clear All Filters
            </Button>
          </div>
        )}
        <footer className="mt-12 p-10 border-2 border-dashed rounded-3xl bg-gray-50/50 flex flex-col md:flex-row items-center gap-8 shadow-inner">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border-2 border-nysc-green-100 flex items-center justify-center text-nysc-green-800 shrink-0">
            <Info className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-gray-900">Official Operational Disclaimer</h4>
            <p className="text-xs text-muted-foreground max-w-4xl font-medium leading-relaxed">
              NYSC Smart Companion provides independent operational support and educational resources. This platform is NOT an official NYSC portal and is not affiliated with the National Youth Service Corps directorate. Always verify critical dates, official payments, and policy changes directly via official government communications on the <a href="https://portal.nysc.org.ng" className="text-nysc-green-800 underline font-black" target="_blank" rel="noreferrer">Official NYSC Portal</a>. Your use of this tool indicates acknowledgment of this advisory.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}