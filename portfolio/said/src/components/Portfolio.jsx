import { ProjectCard } from "./ProjectCard"
import robleThumbnail from "../assets/thumb-roble.png"

export function Portfolio() {

    return(
        <section id="portfolio" className="grid grid-cols-12 gap-11 p-11 text-white grid-rows-5">
            <div></div>
            <h2 className="text-4xl col-span-12 self-end">Selected projects:</h2>
            <ProjectCard fondo={robleThumbnail} />
        </section>
    )
}