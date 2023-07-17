import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction';

function App() {
  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin,interaction ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1',description:"1", date: '2023-03-28' },
          // { title: 'event 2', date: '2023-03-28',backgroundColor:"#ffffff" }
        ]}
        eventClick={()=>console.log("g")}
        editable={true}
        droppable={true}
        eventDrop={(e)=>console.log(e.event.start)}
        dateClick={(e)=>console.log(e)}
      />
    </div>
  );
}

export default App;
