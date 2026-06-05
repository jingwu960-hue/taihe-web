'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

/**
 * 404 页面
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-8xl font-bold bg-gradient-to-r from-primary to-brand-foreground bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          页面未找到
        </h1>
        
        <p className="text-muted-foreground mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回上一页
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
