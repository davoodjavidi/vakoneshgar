"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "فروردین",
    office: 90,
    wfh: 10,
  },
  {
    name: "اردیبهشت",
    office: 54,
    wfh: 12,
  },
  {
    name: "خرداد",
    office: 56,
    wfh: 15,
  },

  {
    name: "تیر",
    office: 67,
    wfh: 3,
  },
  {
    name: "مرداد",
    office: 76,
    wfh: 24,
  },
  {
    name: "شهریور",
    office: 76,
    wfh: 34,
  },
  {
    name: "مهر",
    office: 87,
    wfh: 54,
  },
  {
    name: "آبان",
    office: 24,
    wfh: 12,
  },
  {
    name: "آذر",
    office: 56,
    wfh: 7,
  },
  {
    name: "دی",
    office: 89,
    wfh: 21,
  },
  {
    name: "بهمن",
    office: 21,
    wfh: 8,
  },
  {
    name: "اسفند",
    office: 65,
    wfh: 21,
  },
];

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zink-200 dark:[&_.recharts-tooltip-cursor]:fill-slate-700"
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} style={{ direction: "ltr" }} />
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:!bg-black rounded-md dark:!border-border text-sm"
          separator=": "
          formatter={(value, name) => {
            if (name === "office") {
              return [value, "کار در شرکت"];
            } else if (name === "wfh") {
              return [value, "کار از خانه"];
            }
          }}
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "office") {
              return <div className="text-sm">کار در شرکت</div>;
            } else if (value === "wfh") {
              return <div className="text-sm">کار از خانه</div>;
            }
          }}
        />
        <Bar dataKey={"office"} stackId={1} fill="#E60076" />
        <Bar dataKey={"wfh"} stackId={1} fill="#929292" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
