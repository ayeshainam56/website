import {Button} from "../../libs/lib-vt-performance-ui";
import discord from '../assets/images/discord.svg'

export default function InviteToDiscord() {

    return (
        <div className="w-full flex flex-col gap-5 items-center">
            <p className="text-center max-w-[970px] text-base sm:text-[22px] text-purple-900 dark:text-gray-300 font-normal">
                If you're experiencing any challenges or have questions, don't hesitate to get in touch.
                <span className="mx-1 font-bold dark:text-white">Join our Discord community</span>
                for interactive support or click the button below for direct assistance. We're here to help every step of the way!
            </p>
            <div className="w-full flex gap-4 flex-col sm:flex-row justify-center">
                <Button type={"button"} variant={"primary"} extraClasses="gap-2.5">
                    Join Discord
                    <img src={discord} alt="discord"/>
                </Button>
                <Button type={"button"} variant={"outlined"} extraClasses="group gap-2.5 dark:border-white dark:text-white">
                    Contact us
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            className="group-hover:fill-white dark:fill-white"
                            d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 6V8.9L12.65 14.05C12.2591 14.3213 11.7409 14.3213 11.35 14.05L4 8.9V6H20ZM4 18V11L10.35 15.44C11.341 16.1327 12.659 16.1327 13.65 15.44L20 11V18H4Z"
                            fill="#622B86"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
}