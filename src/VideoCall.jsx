import React, { useEffect, useRef } from "react";

function VideoCall() {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = () => {
      if (window.JitsiMeetExternalAPI) {
        const domain = "meet.jit.si";
        const options = {
          roomName: "test-room",
          width: "100%",
          height: "500px",
          parentNode: jitsiContainerRef.current,
        };
        new window.JitsiMeetExternalAPI(domain, options);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div ref={jitsiContainerRef} style={{ height: "auto" }}></div>
    </div>
  );
}

export default VideoCall;
