# 동아줄 server

## Architecture

![image](https://github.com/user-attachments/assets/b453708d-e51e-4893-b337-0890cc53f3d8)

## ERD

```mermaid
erDiagram
"users" {
    Int id PK
    String email UK
    String password
    String name
    Int age
    Gender gender
    String image "nullable"
    userType type
    DateTime created_date
    DateTime updated_date
}
"incumbents_additional" {
    Int id PK
    Int user_id FK
    Int company_id FK "nullable"
    Int school_id FK "nullable"
    Int major_id FK "nullable"
    Int big_job_id "nullable"
    Int mid_job_id "nullable"
    Int small_job_id "nullable"
    Int job_id FK "nullable"
    String short_spec "nullable"
    Int reported_num
    Int advice_count
    Float estimation_count
    DateTime updated_date
}
"students_additional" {
    Int id PK
    Int user_id FK
    Int wish_company_id FK "nullable"
    Int school_id FK "nullable"
    Int major_id FK "nullable"
    Int wish_big_job_id "nullable"
    Int wish_mid_job_id "nullable"
    Int wish_small_job_id "nullable"
    Int wish_job_id FK "nullable"
    String portfolio "nullable"
    Int reported_num
    Float total_grade "nullable"
    Int advice_count
    Float estimationCount
    DateTime updated_date
}
"category" {
    Int id PK
    String name
}
"posts" {
    Int id PK
    Int user_id FK "nullable"
    Int category_id FK "nullable"
    String title
    String content
    Int view
    Int recommend
    Int reported
    DateTime created_date
    DateTime updated_date
}
"comments" {
    Int id PK
    Int post_id FK
    Int user_id FK "nullable"
    String content
    Int parent_comment_id FK "nullable"
    Int recommend
    Int reported
    DateTime created_date
    DateTime updated_date
    Boolean is_delete
}
"recommend_posts" {
    Int id PK
    Int post_id FK
    Int user_id FK
    DateTime created_date
}
"reported_posts" {
    Int id PK
    Int post_id FK
    Int user_id FK
    String reason
    DateTime created_date
}
"recommend_comments" {
    Int id PK
    Int comment_id FK
    Int user_id FK
    DateTime created_date
}
"reported_comments" {
    Int id PK
    Int comment_id FK
    Int user_id FK
    String reason
    DateTime created_date
}
"reported_users" {
    Int id PK
    Int target_user_id FK
    Int reporting_user_id
    String reason
    DateTime created_date
}
"company" {
    Int id PK
    String name
    String address
    Float longitude
    Float latitude
    String scale
    Int big_job_kind_id FK
    Int mid_job_kind_id FK
    Int small_job_kind_id FK
}
"school" {
    Int id PK
    String name
    String branch
}
"major" {
    Int id PK
    Int schoolId FK
    String name
    String dayAndNight
}
"big_job_kind" {
    Int id PK
    String name
}
"mid_job_kind" {
    Int id PK
    Int bigJobKindId FK
    String name
}
"small_job_kind" {
    Int id PK
    Int midJobKindId FK
    String name
}
"job" {
    Int id PK
    Int clustering_group
    String name
}
"incumbents_additional" |o--|| "users" : users
"incumbents_additional" }o--|| "company" : company
"incumbents_additional" }o--|| "school" : school
"incumbents_additional" }o--|| "major" : major
"incumbents_additional" }o--|| "job" : job
"students_additional" |o--|| "users" : users
"students_additional" }o--|| "company" : wishCompany
"students_additional" }o--|| "school" : school
"students_additional" }o--|| "major" : major
"students_additional" }o--|| "job" : wishJob
"posts" }o--|| "category" : categories
"posts" }o--|| "users" : users
"comments" }o--|| "users" : users
"comments" }|--|| "posts" : post
"comments" }o--o| "comments" : parent
"recommend_posts" }|--|| "users" : users
"recommend_posts" }|--|| "posts" : post
"reported_posts" }|--|| "users" : users
"reported_posts" }|--|| "posts" : post
"recommend_comments" }|--|| "comments" : comment
"recommend_comments" }|--|| "users" : users
"reported_comments" }|--|| "comments" : comment
"reported_comments" }|--|| "users" : users
"reported_users" }|--|| "users" : users
"company" }|--|| "big_job_kind" : bigJobKind
"company" }|--|| "mid_job_kind" : midJobKind
"company" }|--|| "small_job_kind" : smallJobKind
"major" }|--|| "school" : school
"mid_job_kind" }|--|| "big_job_kind" : bigJobKind
"small_job_kind" }|--|| "mid_job_kind" : midJobKind
```

## API
![image](https://github.com/user-attachments/assets/644b44e7-5702-473f-9a5e-aef339924fa6)
![image](https://github.com/user-attachments/assets/e30274e2-69d4-4c30-92af-4a212c9a1465)
![image](https://github.com/user-attachments/assets/188cd8d1-ce71-4813-8f9c-d508f00540c8)


## Stack
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">

<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">  <img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> 

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"> <img src="https://img.shields.io/badge/confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white"> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white"> 
