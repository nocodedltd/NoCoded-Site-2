import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalendarEmbedProps {
  className?: string;
}

export default function CalendarEmbed({ className }: CalendarEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30-min-chat"});
      cal("ui", {
        "theme":"auto",
        "cssVarsPerTheme":{
          "light":{"cal-brand":"#7c3aed"},
          "dark":{"cal-brand":"#7c3aed"}
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    })();
  }, []);

  return (
    <div className={className}>
      <Cal 
        namespace="30-min-chat"
        calLink="nocoded/30-min-chat"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view","theme":"auto"}}
      />
    </div>
  );
}