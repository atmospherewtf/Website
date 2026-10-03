
import placeholder from '../assets/img/placeholder.png'
import skin from '../assets/img/skin.png'
import cape from '../assets/img/cape.png'

export interface Discord {
    id: string;
    username: string;
}
export interface User {
    id: number;
    username: string;
    avatar: string;
    skin: string;
    cape: string;
    discord: Discord | null;
}
export const UserTemplate = {
    demo: true,
    id: 1,
    username: "Username",
    avatar: placeholder,
    skin: skin,
    cape: cape,
    discord: null,
}