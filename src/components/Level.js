import { MAX_MINES, MINES_PERCENTAGE } from "../pages/App";

const LEVELS = [
    {
        "name": "beginner",
        "col": 8,
        "row": 8,
    },
    {
        "name": "intermediate",
        "col": 16,
        "row": 16,
    },
    {
        "name": "advanced",
        "col": 20,
        "row": 20,
    }
];

const getMines = (board) => {
    let mines = (board * MINES_PERCENTAGE) / 100;

    return mines < MAX_MINES ? Math.floor(mines) : MAX_MINES
}

function Level({ handleBoard }) {
    let setBoard = (level) => {
        handleBoard({
            name: level.name,
            col: level.col,
            row: level.row,
            mines: getMines(level.row * level.col),
        })
    }
    return (
        <div className="w-2/3 md:w-3/4 lg:w-2/3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {LEVELS.map(level => (
                    <button onClick={() => setBoard(level)} key={level.name} className="p-2 max-w-sm bg-opacity-10 bg-slate-200 backdrop-blur-xl rounded-lg border shadow-md sm:p-8">
                        <h5 className="font-towards text-center capitalize mb-3 text-lg lg:text-2xl font-bold text-white">{level.name}</h5>
                        <div className="mb-3 flex justify-center text-white">
                            <span className="text-3xl font-light tracking-tight">{ level.row }</span>
                            <span className="mx-2 text-xl self-center font-normal text-white">x</span>
                            <span className="text-3xl font-light tracking-tight">{ level.col }</span>
                        </div>
                        <div className="mb-3 flex justify-center text-white">
                            <span className="text-3xl font-light tracking-tight">{ getMines(level.row * level.col) }</span>
                            <span className="ml-2 text-3xl font-light tracking-tight">💣</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
  }
  
  export default Level;
  