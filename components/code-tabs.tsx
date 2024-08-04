// Tabs inside code snippet modal
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientCodeBlock from './code-block';

interface Props {
  html: string;
  css?: string;
}

export const CodeTabs = ({ html, css }: Props) => {
  return (
    <Tabs defaultValue="html" className=" h-full">
      <TabsList className="flex items-center justify-center max-w-fit mx-auto">
        {html && <TabsTrigger value="html">HTML</TabsTrigger>}
        {css && <TabsTrigger value="css">CSS</TabsTrigger>}
        {/* <TabsTrigger value="js">JS/X</TabsTrigger> */}
      </TabsList>
      <TabsContent value="html">
        <Card className="max-w-screen-xl mx-auto">
          <ClientCodeBlock language="html" code={html} />
        </Card>
      </TabsContent>
      <TabsContent value="css">
        <Card className=" max-w-screen-2xl">
          <ClientCodeBlock language="css" code={css!} />
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
