import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteInfoTab from "./_component/SiteInfo/SiteInfoTab";
import TeamsStatTab from "./_component/teamtab/team-stats";

export default function Dashboard() {
  return (
    <Tabs defaultValue="siteInfo">
      <TabsList className="mb-4">
        <TabsTrigger value="siteInfo">اطلاعات کلی سایت</TabsTrigger>
        <TabsTrigger value="teamsInfo">اطلاعات تیم</TabsTrigger>
      </TabsList>
      <TabsContent value="siteInfo">
        <SiteInfoTab />
      </TabsContent>
      <TabsContent value="teamsInfo">
        <TeamsStatTab />
      </TabsContent>
    </Tabs>
  );
}
