library(tidyverse)
# read in files
football <- read.csv("college_football_records.csv")
scorecard <- read.csv("combined_scorecard_data.csv")


# data cleaning
## football dataset
football$tied[is.na(football$tied)] <- 0 # filling tied = NAs with 0

football <- football |> # rename to join and easy to read
  rename(
    TEAM = "team",
    YEAR = "year",
    WON = "won",
    LOST = "lost",
    TIED = "tied",
    INSTNM = "scorecard_name"
  )|>
  mutate(
    WIN_RATE = WON/(WON+LOST+TIED) # create "WIN_RATE"
  ) |>
  select(-notes) # deselecting "notes"


## scorecard dataset
scorecard <- scorecard |> 
  mutate(
    ON_CAMPUS_EXPENSES = BOOKSUPPLY + ROOMBOARD_ON + OTHEREXPENSE_ON, # create "ON_CAMPUS_EXPENSES"
    OFF_CAMPUS_EXPENSES = BOOKSUPPLY + ROOMBOARD_OFF + OTHEREXPENSE_OFF # create "OFF_CAMPUS_EXPENSES"
  ) |>
  # select desired variables
  select(c("INSTNM", "Year", "REGION", "CCSIZSET", "ADM_RATE", "ACTCMMID", "SAT_AVG", "UGDS", "UGDS_WHITE", "UGDS_BLACK", "UGDS_HISP", "UGDS_ASIAN", "TUITIONFEE_IN", "TUITIONFEE_OUT", "C150_4","RET_FT4", "UGDS_MEN", "UGDS_WOMEN", 
           "ON_CAMPUS_EXPENSES", "OFF_CAMPUS_EXPENSES")) |>
  rename(YEAR = "Year") # rename to join


# merging
master <- full_join(football, scorecard, by = c("INSTNM", "YEAR")) 

master <- master |>
  filter(YEAR >= 1996 & YEAR <=2022) |> # filter data to from 1996 to 2022
  select("INSTNM", "TEAM", everything()) # reorder columns

# export file
write_csv(master, "football_admission.csv")