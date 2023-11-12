import SaveProgress from "../../SaveProgress";
import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function OnlineStatus() {

    const isOnline = useOnlineStatus()

    return (
        <div>
            <h2>{isOnline ? '☑️ Online': '❗Offline'}</h2>
      <SaveProgress/>
        </div>
    )
}