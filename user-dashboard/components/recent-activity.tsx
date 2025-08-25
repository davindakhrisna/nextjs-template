import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "created a new project",
    time: "2 minutes ago",
    avatar: "/sarah-avatar.png",
    initials: "SJ",
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "updated user permissions",
    time: "15 minutes ago",
    avatar: "/generic-person-avatar.png",
    initials: "MC",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "completed task review",
    time: "1 hour ago",
    avatar: "/emily-avatar.png",
    initials: "ED",
  },
  {
    id: 4,
    user: "Alex Rodriguez",
    action: "uploaded new documents",
    time: "2 hours ago",
    avatar: "/alex-avatar.png",
    initials: "AR",
  },
  {
    id: 5,
    user: "Lisa Wang",
    action: "joined the team",
    time: "1 day ago",
    avatar: "/lisa-avatar.png",
    initials: "LW",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
