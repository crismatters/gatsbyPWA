import React, { Component } from "react"
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/core/main.css"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import Grid from "@material-ui/core/Grid"

export default class EventCalendar extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
        </Grid>
      </Grid>
    )
  }
}
