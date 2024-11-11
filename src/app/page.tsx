"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Import Components
import PageAppBar from "./components/pageappbar";
import ProfileForm from "./components/profileform";
import ResultForm from "./components/resultform";
import { useState } from "react";
interface FormData {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  hobbies: string[];
  status: string;
  note: string;
  confirmPDPA: boolean;
}
export default function Home() {
  const [results, setResults] = useState<FormData[]>([]);

  const handleFormSubmit = (data: FormData) => {
    setResults((prev) => [...prev, data]);
  };
  const handleDelete = (index: number) => {
    setResults((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <Box>
      <PageAppBar />
      <Grid
        container
        spacing={2}
        paddingTop={10}
        size={{ xs: 12, md: 7, lg: 8 }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <ProfileForm onSubmit={handleFormSubmit} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          {results.map((result, index) => (
            <ResultForm
              key={index}
              index={index}
              data={result}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
