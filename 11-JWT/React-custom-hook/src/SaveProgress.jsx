import useOnlineStatus from "./hooks/useOnlineStatus"

export default function SaveProgress() {

    const isOnline = useOnlineStatus()

    return (
        <button disabled={!isOnline}>{isOnline ? 'Save Progress': 'Reconnecting...'}</button>
    )
}