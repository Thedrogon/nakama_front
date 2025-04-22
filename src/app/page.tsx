import {SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarHeader, SidebarSeparator, SidebarInset} from '@/components/ui/sidebar';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar collapsible="icon" variant="inset">
          <SidebarHeader>
            <CardTitle>NakamaChat</CardTitle>
            <CardDescription>Your anime-inspired chat app</CardDescription>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button variant="ghost" className="justify-start">
                      <Icons.home className="mr-2 h-4 w-4"/>
                      <span>Home</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button variant="ghost" className="justify-start">
                      <Icons.userPlus className="mr-2 h-4 w-4"/>
                      <span>Connect</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button variant="ghost" className="justify-start">
                      <Icons.users className="mr-2 h-4 w-4"/>
                      <span>Groups</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarSeparator/>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Welcome to your NakamaChat dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/50/50" alt="User Avatar"/>
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Username</p>
                      <p className="text-sm text-muted-foreground">user.id</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Real-time Chat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Chat content will be displayed here.
                    {/* Example input and send button */}
                    <div className="flex items-center space-x-2">
                      <Input type="text" placeholder="Type your message..."/>
                      <Button>
                        <Icons.send className="mr-2 h-4 w-4"/>
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

