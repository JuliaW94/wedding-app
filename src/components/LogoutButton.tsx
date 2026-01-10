import { logout } from '../auth/logout'
import {Button} from "@mui/material";

export default function LogoutButton() {
    return <Button variant={"outlined"} onClick={logout}>Logout</Button>
}