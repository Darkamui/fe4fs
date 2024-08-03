"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideClipboard } from "lucide-react";
import { codeToHtml, codeToTokens, createHighlighter } from "shiki";
import ClientCodeBlock from "./code-block";

interface Props {
  html: string;
  css?: string;
}

export const CodeTabs = ({ html, css }: Props) => {
  const copyToCB = async (text: string) => {
    await navigator.clipboard.writeText(text);
    return;
  };
  return (
    <Tabs defaultValue="html" className=" h-full">
      <TabsList className="flex items-center justify-center max-w-fit mx-auto px-4 ">
        {html && <TabsTrigger value="html">HTML</TabsTrigger>}
        {css && <TabsTrigger value="css">CSS</TabsTrigger>}
        {/* <TabsTrigger value="js">JS/X</TabsTrigger> */}
      </TabsList>
      <TabsContent value="html">
        <Card>
          <CardContent className="flex flex-1 w-full">
            <ClientCodeBlock language="html" code={html} />
          </CardContent>
          <CardFooter className="mt-6 flex items-center justify-center">
            <Button
              className="flex items-center justify-center gap-2"
              onClick={() => copyToCB(html)}
            >
              <LucideClipboard />
              Copy to clipboard
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="css">
        <Card>
          <CardContent className="flex flex-1 w-full">
            <ClientCodeBlock language="css" code={css!} />
          </CardContent>

          <CardFooter className="mt-6 flex items-center justify-center">
            <Button
              className="flex items-center justify-center gap-2"
              onClick={() => copyToCB(css!)}
            >
              <LucideClipboard />
              Copy to clipboard
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
