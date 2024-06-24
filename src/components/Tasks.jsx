import NewTask from "./NewTask";

export default function (){
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask />
            <p className="text-stone-800 my-4">No Tasks Yest!</p>
            <ul></ul>
        </section>
    );
}