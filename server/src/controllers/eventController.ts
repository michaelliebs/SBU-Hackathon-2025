import { Request, Response } from "express";
import Event from "../models/Events";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find()
      .populate("host", "name email")
      .populate("attendees", "name email")
      .populate("interested", "name email")
      .populate({
        path: "comments",
        select: "text createdBy createdAt",
        populate: { path: "createdBy", select: "name" }
      })
      .sort({ date: 1 });


    const now = new Date();
    const updatedEvents = events.map((event) => {
      const raw = event.date instanceof Date ? event.date : new Date(event.date);
      const eventDateTime = new Date(raw); // clone

      if (event.time) {
        if (event.time) {
          const parts = event.time.split(":");
          const h = Number(parts[0]);
          const m = parts.length > 1 ? Number(parts[1]) : 0;

          if (!Number.isNaN(h)) {
            eventDateTime.setHours(h, m, 0, 0);
          }
        }
      }

      let status = "Upcoming";
      if (eventDateTime < now) status = "Completed";

      return { ...event.toObject(), status };
    });

    const visibleEvents = updatedEvents.filter(
      (e) => e.status === "Upcoming" || e.status === "Ongoing"
    );

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
