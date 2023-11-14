import { useState } from "react";
import RegularButton from "../RegularButton/RegularButton";

function QueueItem(aTicket) {
  const [isDone, setIsDone] = useState(false);

  function completeTask(event) {
    console.log(event);
    setIsDone(!isDone);
  }

  return (
    <div className="grid grid-cols-12 py-2 hover:bg-blue-600">
      <input className="col-span-1" name="taskDone" id={aTicket.title + "taskStatus"} type="checkbox" onChange={completeTask}/>
      <label className="col-span-5" for={aTicket.title + "taskStatus"}>{aTicket.title}</label>
      <span className="col-span-3">{aTicket.date}</span>
      <span className="col-span-3">{aTicket.progress}</span>
    </div>
  );
}

export default function TicketQueue({children}) {

  // Sample children
  if(children == null) {
    children = [
      {
        "title": "Ticket 1",
        "date": "2023-11-03",
        "progress": "complete"
      },
      {
        "title": "Ticket 2",
        "date": "2023-11-03",
        "progress": "pending"
      },
      {
        "title": "Ticket 3",
        "date": "2023-11-03",
        "progress": "work in progress"
      },
      {
        "title": "Ticket 4",
        "date": "2023-11-04",
        "progress": "complete"
      },
      {
        "title": "Ticket 5",
        "date": "2023-11-04",
        "progress": "work in progress"
      },
      {
        "title": "Ticket 6",
        "date": "2023-11-05",
        "progress": "pending"
      },
      {
        "title": "Ticket 7",
        "date": "2023-11-05",
        "progress": "complete"
      },
      {
        "title": "Ticket 8",
        "date": "2023-11-06",
        "progress": "pending"
      },
      {
        "title": "Ticket 9",
        "date": "2023-11-06",
        "progress": "work in progress"
      },
      {
        "title": "Ticket 10",
        "date": "2023-11-07",
        "progress": "pending"
      },
      {
        "title": "Ticket 11",
        "date": "2023-11-07",
        "progress": "work in progress"
      },
      {
        "title": "Ticket 12",
        "date": "2023-11-08",
        "progress": "complete"
      },
      {
        "title": "Ticket 13",
        "date": "2023-11-08",
        "progress": "work in progress"
      },
      {
        "title": "Ticket 14",
        "date": "2023-11-09",
        "progress": "pending"
      },
      {
        "title": "Ticket 15",
        "date": "2023-11-09",
        "progress": "complete"
      }
    ];    
  }

  // Sample use of children
  // <TicketQueue >
  //   {[{
  //     "title": "Door Stuck",
  //     "date": "2023-11-03",
  //     "progress": "complete"
  //   },
  //   {
  //     "title": "Need new laptop",
  //     "date": "2023-11-03",
  //     "progress": "pending"
  //   },
  //   {
  //     "title": "Merge pull request",
  //     "date": "2023-11-03",
  //     "progress": "work in progress"
  //   }]}
  // </TicketQueue>

  return(
    <div>
      <QueueHeader header="Your Team Queue"/>
      <div className="">
        {
          children.map(child => {
            return QueueItem(child);
          })
        }
      </div>
    </div>
  );
}

function QueueHeader(props) {
  return (
    <div>
      <h2 className="text-xl">{props.header}</h2>
      <div className="grid grid-cols-12 py-2 bg-white text-black">
        <span className="col-start-2 col-span-5 underline">Title</span>
        <span className="col-span-3 underline">Date</span>
        <span className="col-span-3 underline">Progress</span>  
      </div>
    </div>
  );
}