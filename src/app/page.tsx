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
  const [currentId, setCurrentId] = useState<number>(0);

  const handleFormSubmit = (data: FormData) => {
    const newData = { ...data, id: currentId };
    setResults((prev) => [...prev, newData]);
    setCurrentId((prev) => prev + 1);
  };
  const handleDelete = (id: string | number) => {
    setResults((prev) => prev.filter((item) => item.id !== id));
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
              key={result.id}
              index={index}
              data={result}
              onDelete={() => handleDelete(result.id)}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
