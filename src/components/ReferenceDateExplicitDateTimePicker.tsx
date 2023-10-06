// import dayjs, { Dayjs } from 'dayjs';
// import ja from 'date-fns/locale/ja'
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { useState } from 'react';
// import { jaJP } from '@mui/x-date-pickers/locales';

// export default function ReferenceDateExplicitDateTimePicker() {
//   const [value, setValue] = useState<Dayjs | null>(null);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <>

//       <form className='w-full'>
//         <div className="flex flex-col space-y-5 my-4">
//           <label className='text-xl'>
//             お名前:
//             <br className='sm:hidden' />
//             <input
//               className='border sm:ml-16 text-skin-accent'
//               type="text"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label className='text-xl'>
//             メールアドレス:
//             <br className='sm:hidden' />
//             <input
//               className='border text-skin-accent'
//               type="text"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <LocalizationProvider
//           dateAdapter={AdapterDayjs}
//           localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
//         >
//           <Stack spacing={2} sx={{ minWidth: 305 }}>
//             <DateTimePicker
//               value={value}
//               onChange={setValue}
//               referenceDate={dayjs('2023-10-10T15:30')}
//             />
//           </Stack>
//         </LocalizationProvider>
//         <button type="submit">送信</button>
//       </form>

//     </>
//   );
// }

// import React from "react"
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import pkg from '@mui/x-date-pickers/AdapterDayjs/index.js';
// // const { AdapterDayjs } = pkg;
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// export const ReferenceDateExplicitDateTimePicker = () => {
//   return (
//     // <LocalizationProvider
//     //   dateAdapter={AdapterDayjs}
//     // >
//     <DateTimePicker
//       defaultValue={dayjs.tz('2022-04-17T15:30', 'America/New_York')}
//     />
//     // </LocalizationProvider>
//   );
// }

// import { setHours, setMinutes } from "date-fns";

// import { useState } from "react"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export const ReferenceDateExplicitDateTimePicker = () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(), 30), 16),
//   );
//   return (
//     <DatePicker
//       // locale={ja}
//       selected={startDate}
//       onChange={(date: any) => setStartDate(date)}
//       showTimeSelect
//       excludeTimes={[
//         setHours(setMinutes(new Date(), 0), 17),
//         setHours(setMinutes(new Date(), 30), 18),
//         setHours(setMinutes(new Date(), 30), 19),
//         setHours(setMinutes(new Date(), 30), 17),
//       ]}
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };
