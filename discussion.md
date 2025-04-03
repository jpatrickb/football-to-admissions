# Touchdowns to Diplomas

Will investing in a winning football team
1. Attract more students to enroll,
2. Attract higher caliber students, and
3. Be good for people of all races and genders?

## Data Cleaning
- Merging (Hans)
  - Dropping unnecessary variables
  - On `scorecard_name`/`INSTNM`  and year
- Filling NaNs (Hans)
  - Race data before 2010
  - Ties (fill with zeros)
- Feature generation (Hans)
  - Win/loss ratio ($Win / (Win + Loss + Tie)$, so we count ties as a loss since there's so few)
  - Enrollment ratio ($enrolled/admitted$) (How can we find the number admitted?)
  - `CCSIZSET` grouping: Carnegie classification has 19 categories, group them into these 6 groups to reduce the number (for Bayesian clustering)
    - 1-5 together
    - 6-8
    - 9-11
    - 12-14
    - 15-17
    - 18 alone
- Finding Conference data (Madi)
  - Then merge in with everything else

|Variable Name| Description |
| ----| --|
|INSTNM|Institution name |
|Year|              Year |
|REGION|            Region (IPEDS) |
|CCSIZSET|          Carnegie Classification -- size and setting |
|ADM_RATE|          Admission rate |
|ACTCMMID|          Midpoint of the ACT cumulative score |
|SAT_AVG|           Average SAT equivalent score of students admitted |
|UGDS |             Enrollment of undergraduate certificate/degree-seeking students |
|UGDS_WHITE|        Total share of enrollment of undergraduate degree-seeking students who are white |
|UGDS_BLACK|        Total share of enrollment of undergraduate degree-seeking students who are black |
|UGDS_HISP|         Total share of enrollment of undergraduate degree-seeking students who are Hispanic |
|UGDS_ASIAN|        Total share of enrollment of undergraduate degree-seeking students who are Asian |
|TUITIONFEE_IN|     In-state tuition and fees |
|TUITIONFEE_OUT|    Out-of-state tuition and fees |
|C150_4|            Completion rate for first-time, full-time students at four-year institutions (150% of expected time to completion) |
|RET_FT4|           First-time, full-time student retention rate at four-year institutions |
|UGDS_MEN|          Total share of enrollment of undergraduate degree-seeking students who are men |
|UGDS_WOMEN|        Total share of enrollment of undergraduate degree-seeking students who are women |
|MDCOST_ALL|        Overall median for average net price |
| WINPERC |         Percentage of football games won |
-----


## Bayesian Hierarchical Model
```mermaid
graph
    

```


> [!IMPORTANT]
> - Race data is only recorded consistently in and after 2010