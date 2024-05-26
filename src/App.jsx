import { useForm } from "react-hook-form";
import Form from "./Components/Form";
import Input from "./Components/Input";
import Select from "./Components/Select";
import { depertment, info } from "./Components/tableData";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

export default function App() {
  const { register, watch } = useForm();
  const data = {
    name: watch("name"),
    technology: watch("tech"),
    Roll: watch("roll"),
    RegistrationNo: watch("reg"),
    Session: watch("session"),
    Semester: watch("semester"),
    Shift: watch("shift"),
  };
  return (
    <div className="flex justify-center">
      {/* <Form info={info} depertment={depertment} /> */}
      <div className=" w-full bg-gray-200">
        <div className="">
          <h1 className="text-4xl p-2">Title</h1>
          <div></div>
        </div>
        <div className="h-[1px] bg-black"></div>
        <hr />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col mt-5 p-3"
        >
          <Input label={"Name:"} {...register("name")} />
          <Input label={"Board Roll:"} {...register("roll")} />
          <Input label={"Registration No:"} {...register("reg")} />
          <Select
            {...register("tech")}
            options={["Computer Science and Technology"]}
            label={"Technology:"}
          />
          <Select
            {...register("session")}
            options={[
              "2020-2021",
              "2021-2022",
              "2022-2023",
              "2023-2024",
              "2025-2026",
              "2027-2027",
              "2028-2029",
            ]}
            label={"Session:"}
          />
          <Select
            {...register("semester")}
            options={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]}
            label={"Semester:"}
          />
          <Select
            {...register("shift")}
            options={["First", "Second"]}
            label={"Shift:"}
          />
          <div className="gap-4 flex py-4">
            <PDFDownloadLink
              document={<Form depertment={depertment} info={data} />}
              fileName="GAI-form.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <p className="bg-white w-28 rounded py-1 text-sky-600 font-bold flex justify-center">
                    Donload
                  </p>
                )
              }
            </PDFDownloadLink>
          </div>
        </form>
      </div>
    </div>
  );
}
