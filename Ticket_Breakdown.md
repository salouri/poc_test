# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1- Create a mapping table "AgentFacilites" that includes mainly three fields: the ID of each Agent (agent_id), the ID of the Facility in which the agent has shifts booked at(facility_id), and the agent's new generated ID for that Facility's reports (facitlity_agent_id). Other fields could be : "created_at", "updated_at", and/or "active" (1 hour)

2- Modify the function that books Agents at Shifts so it also uses the agent's "facitlity_agent_id", if it exists, or creates a new one if it does'nt exist. Shifts booked will only see the facitlity_agent_id. Therefore, it will be picked up in the results fetched by "getShiftsByFacility" function, and later the "generateReport" function. Modify any related unit tests. (2 hours)

3- build a one time worker that goes through all the existing Agents and creates a new "AgentFacilites" record for each Agent, with the same agent_id and facility_id, and a new generated ID for the facility_agent_id. (1 hour)

4- Modify the "generateReport" function, along with any related unit tests, to use the facility_agent_id instead of the agent_id. A pdf library can be used to generate the report. (2 hours)

5- Add a new API endpoint that allows the Facility to create/update the facility_agent_id for each Agent. A decision needs to be made on which CRUD operations need to be allowed on the AgentFacilites table other than CREATE(POST). Integration test(s) needs to be added to test the new endpoint, based on allowed CRUD operations. (3 hours)

Time/effort estimates: 1-3 hours for each ticket, ~ 10 hours total. Depending on how many current unit tests there are, and how many new ones need to be added, the time/effort estimates could be higher.
