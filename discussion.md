# Touchdowns to Diplomas

Will investing in a winning football team
1. Attract more students to enroll,
2. Attract higher caliber students, and
3. Be good for people of all races and genders?

## Data Cleaning
- Merging (Hans)
  - On `scorecard_name`/`INSTNM`  and year
- Filling NaNs
  - Race data before 2010
  - Ties (fill with zeros)
- Feature generation
  - Win/loss ratio ($Win / (Win + Loss + Tie)$)
  - Enrollment ratio ($enrolled/admitted$) (How can we find the number admitted?)

|Variables to Keep|
----
|INSTNM|
|Year|
|REGION|
|CCSIZSET|
|ADM_RATE|
|ACTCMMID|
|SAT_AVG|
|UGDS
|UGDS_WHITE|
|UGDS_BLACK|
|UGDS_HISP|
|UGDS_ASIAN|
|TUITIONFEE_IN|
|TUITIONFEE_OUT|
|C150_4|
|RET_FT4|
|UGDS_MEN|
|UGDS_WOMEN|
|MDCOST_ALL|


```mermaid

```


> [!IMPORTANT]
> - Race data is only recorded consistently in and after 2010