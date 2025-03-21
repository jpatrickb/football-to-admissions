library(tidyverse)
# read in files
football <- read.csv("college_football_records.csv")
scorecard <- read.csv("combined_scorecard_data.csv")


# data cleaning
## football dataset
football <- football |> # deselecting "notes"
  select(-notes)

football$tied[is.na(football$tied)] <- 0 # filling tied = NAs with 0

football <- football |> # rename to join and easy to read
  rename(
    TEAM = "team",
    YEAR = "year",
    WON = "won",
    LOST = "lost",
    TIED = "tied",
    INSTNM = "scorecard_name"
  )

football <- football |> # make WIN_RATE
  mutate(
    WIN_RATE = WON/(WON+LOST+TIED)
  )

## scorecard dataset
scorecard <- scorecard |>
  select(c("INSTNM", "Year", "REGION", "CCSIZSET", "ADM_RATE", "ACTCMMID", "SAT_AVG", "UGDS", "UGDS_WHITE", "UGDS_BLACK", "UGDS_HISP", "UGDS_ASIAN", "TUITIONFEE_IN", "TUITIONFEE_OUT", "C150_4","RET_FT4", "UGDS_MEN", "UGDS_WOMEN", "MDCOST_ALL"))

scorecard <- scorecard |> # rename to join
  rename(YEAR = "Year")


# merging
master <- full_join(football, scorecard, by = c("INSTNM", "YEAR")) 


