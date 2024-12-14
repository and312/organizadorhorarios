// HORARIO con la libreria de paga

"use client";

import { 
    Day,
    Inject, 
    Month,
    ScheduleComponent, 
    ViewDirective, 
    ViewsDirective,
    Week, 
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
    "ORg4AjUWIQA/Gnt2UVhhQlVFfV5dXGpWfFN0QXNfdV9zflFHcC0sT3RfQFljSH5Vd0ZgUH1ccH1dTg=="
);

const data = [
    {
        Id: 1,
        Subject: "Sales Presentation",
        StartTime: new Date(2025, 1, 11, 10, 0),
        EndTime: new Date(2025, 1, 11, 12, 30),
        IsAllDay: false,
    },
    {
        Id: 2,
        Subject: "New Budget Report",
        StartTime: new Date(2025, 1, 10, 10, 0),
        EndTime: new Date(2025, 1, 10, 12, 30),
        IsAllDay: true,
        Status: "Completed",
        Priority: "High",
    },
];

export default function Page() {
    return (
        <main>
            <ScheduleComponent 
                width={800}
                height={500}

                eventSettings={{
                    dataSource: data,
                }}
            >
                <ViewsDirective>
                    <ViewDirective option="Day" />
                    <ViewDirective option="Week" />
                    <ViewDirective option="Month" />
                </ViewsDirective>

                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </main>
    );
}