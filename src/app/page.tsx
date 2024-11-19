"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Import Components
import PageAppBar from "./components/PageAppBar";
import ProfileForm from "./components/ProfileForm";
import ResultForm from "./components/ResultForm";
import { useState } from "react";
import { FormData } from "./types/profileform";
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
