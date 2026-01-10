import {RootState, useAppSelector} from "../redux";


export default function Visa() {
    const user = useAppSelector((s: RootState) => s.auth.user)


    return (
        <div>
            <h1>Protected</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}