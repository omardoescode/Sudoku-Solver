import { useTheme } from "../components/theme-provider"
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="bg-indigo-500 text-white">
        <TabsTrigger onClick={() => setTheme("light")} value="light">
          Light
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme("dark")} value="dark">
          Dark
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme("system")} value="system">
          System
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
