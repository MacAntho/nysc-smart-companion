import React, { useState } from 'react';
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
import { Search, ExternalLink, Clock, CheckCircle, CircleCheck, Info } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
export function KnowledgeBasePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const readArticles = useAppStore(s => s.readArticles);
  const toggleReadArticle = useAppStore(s => s.toggleReadArticle);
  const filtered = KNOWLEDGE_ARTICLES.filter(a => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.content.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase()) ||
      a.metadata?.source?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || a.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12 space-y-8">
        <div className="bg-nysc-green-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold">Verified Knowledge Base</h1>
            <p className="text-nysc-green-100">Browse through official rules, survival tips, and legal exemptions.</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search packing, documents, exemptions, rules..."
                className="pl-10 h-12 bg-white text-gray-900 border-none focus-visible:ring-nysc-gold"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs value={category} onValueChange={setCategory} className="w-full md:w-auto">
            <TabsList className="bg-white border">
              <TabsTrigger value="All">All Topics</TabsTrigger>
              <TabsTrigger value="Official">Official</TabsTrigger>
              <TabsTrigger value="Survival">Survival</TabsTrigger>
              <TabsTrigger value="CDS">CDS</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary">{readArticles.length} Read</Badge>
            <span>/</span>
            <span>{KNOWLEDGE_ARTICLES.length} Total</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(article => {
            const isRead = readArticles.includes(article.id);
            const isFeatured = article.metadata?.featured;
            return (
              <Card key={article.id} className={`hover:shadow-md transition-all group border-gray-100 flex flex-col h-full relative ${isFeatured ? 'ring-2 ring-nysc-gold bg-amber-50/10 shadow-lg' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[10px] font-bold text-nysc-green-800 uppercase tracking-widest">{article.category}</div>
                      {isFeatured && <Badge className="bg-nysc-gold text-[8px] h-4 uppercase px-1.5 font-black">Featured Guide</Badge>}
                    </div>
                    {isRead && <CircleCheck className="w-4 h-4 text-nysc-green-500" />}
                  </div>
                  <CardTitle className="text-lg group-hover:text-nysc-green-800 transition-colors leading-tight">{article.title}</CardTitle>
                  {article.metadata?.source && (
                    <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-tighter">
                      Source: {article.metadata.source} {article.metadata.last_updated && `| Updated: ${article.metadata.last_updated}`}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> ~5 min read
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-nysc-green-800 hover:text-nysc-green-900 hover:bg-nysc-green-50 gap-1"
                        >
                          Read More <ExternalLink className="w-3 h-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0">
                        <DialogHeader className="p-6 pb-2">
                          <div className="text-[10px] font-bold text-nysc-green-800 uppercase tracking-widest mb-1">
                            {article.category} {article.metadata?.featured && "• Featured"}
                          </div>
                          <DialogTitle className="text-2xl font-bold">{article.title}</DialogTitle>
                          <DialogDescription className="text-sm text-muted-foreground">
                            {article.summary}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="flex-1 p-6 pt-2">
                          <div className="prose prose-sm text-muted-foreground space-y-4 leading-relaxed max-w-none">
                            <p className="text-lg text-gray-900 font-medium">{article.summary}</p>
                            <div className="h-px bg-gray-100 w-full my-4" />
                            <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
                              {article.content}
                            </div>
                          </div>
                        </ScrollArea>
                        <DialogFooter className="p-4 bg-gray-50 border-t flex flex-row items-center justify-between sm:justify-between">
                          <span className="text-[10px] text-muted-foreground italic">Source: {article.metadata?.source || 'Verified Official'}</span>
                          <Button
                            onClick={() => toggleReadArticle(article.id)}
                            className={readArticles.includes(article.id) ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-nysc-green-800 hover:bg-nysc-green-900"}
                          >
                            {readArticles.includes(article.id) ? "Mark as Unread" : <><CheckCircle className="w-4 h-4 mr-2" /> Mark as Read</>}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <footer className="mt-12 p-8 border-2 border-dashed rounded-2xl bg-gray-50/50 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border flex items-center justify-center text-nysc-green-800 shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-sm text-gray-900">Official Disclaimer</h4>
            <p className="text-xs text-muted-foreground max-w-3xl font-medium leading-relaxed">
              NYSC Smart Companion is an independent operational support tool. While we strive for accuracy, this is NOT an official NYSC portal. Always verify dates, payments, and policy changes directly via official communications on the <a href="https://portal.nysc.org.ng" className="text-nysc-green-800 underline font-bold" target="_blank" rel="noreferrer">NYSC Portal</a>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}