import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, BookOpen, ExternalLink, Filter } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
export function KnowledgeBasePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = KNOWLEDGE_ARTICLES.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || a.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-nysc-green-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold">Verified Knowledge Base</h1>
          <p className="text-nysc-green-100">Browse through official rules, survival tips, and CDS project guides.</p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search guides, forms, rules..." 
              className="pl-10 h-12 bg-white text-gray-900 border-none focus-visible:ring-nysc-gold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-nysc-green-800 rounded-full blur-3xl opacity-50" />
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
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="w-4 h-4" /> Filter Options
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(article => (
          <Card key={article.id} className="hover:shadow-md transition-all group cursor-pointer border-gray-100">
            <CardHeader className="pb-2">
              <div className="text-[10px] font-bold text-nysc-green-800 uppercase tracking-widest mb-1">{article.category}</div>
              <CardTitle className="text-lg group-hover:text-nysc-green-800 transition-colors">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-400">5 min read</span>
                <Button variant="ghost" size="sm" className="h-8 text-nysc-green-800 hover:text-nysc-green-900 hover:bg-nysc-green-50 gap-1">
                  Read More <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-400">No articles found matching your search.</h3>
        </div>
      )}
    </div>
  );
}