# 캡스톤디자인 Friends-across-the-street팀 server

## Project Architecture
![image](https://github.com/Friends-across-the-street/server/assets/108740187/3d2f0598-8976-42e5-9249-016f72f5ae9c)

## Project ERD

> Generated by [`prisma-markdown`](https://github.com/samchon/prisma-markdown)

```mermaid
erDiagram
"incumbent_users" {
    Int id PK
    String email UK
    String password
    String name
    Int age
    String gender
    String image
    Int reported_num
    Int advice_count
    Float estimation_count
    String major
    String school
    String job_description
    String company_name "nullable"
    String comapny_welfare
    String company_location "nullable"
    DateTime createdAt
    DateTime updatedAt
}
"student_users" {
    Int id PK
    String email UK
    String name
    Int age
    String gender
    String image
    Int reported_num
    Float total_grade
    Int advice_count
    Float estimation_count
    String major
    String school
    String wish_job_description
    String wish_company_name
    String wish_company_welfare
    String wish_company_location
    DateTime createdAt
    DateTime updatedAt
}
"posts" {
    Int id PK
    String title
    String content
    Int view
    Int hit
    Int reported
    DateTime createdAt
    DateTime updatedAt
    Int incumbent_user_id FK
    Int student_user_id FK
}
"comments" {
    Int id PK
    String content
    Int parent_comment_id
    Int view
    Int hit
    Int reported
    DateTime createdAt
    DateTime updatedAt
    Int incumbent_user_id FK
    Int student_user_id FK
    Int post_id FK
}
"hits_board" {
    Int id PK
    Int incumbent_user_id FK
    Int student_user_id FK
    Int post_id FK
    DateTime createdAt
    DateTime updatedAt
}
"reported_board" {
    Int id PK
    String reason
    Int incumbent_user_id FK
    Int student_user_id FK
    Int post_id FK
    DateTime createdAt
    DateTime updatedAt
}
"hits_comment" {
    Int id PK
    Int incumbent_user_id FK
    Int student_user_id FK
    Int comment_id FK
    DateTime createdAt
    DateTime updatedAt
}
"reported_comment" {
    Int id PK
    String reason
    Int incumbent_user_id FK
    Int student_user_id FK
    Int comment_id FK
    DateTime createdAt
    DateTime updatedAt
}
"posts" }|--|| "incumbent_users" : incumbent_user
"posts" }|--|| "student_users" : student_user
"comments" }|--|| "incumbent_users" : incumbent_user
"comments" }|--|| "student_users" : student_user
"comments" }|--|| "posts" : post
"hits_board" }|--|| "incumbent_users" : incumbent_user
"hits_board" }|--|| "student_users" : student_user
"hits_board" }|--|| "posts" : post
"reported_board" }|--|| "incumbent_users" : incumbent_user
"reported_board" }|--|| "student_users" : student_user
"reported_board" }|--|| "posts" : post
"hits_comment" }|--|| "incumbent_users" : incumbent_user
"hits_comment" }|--|| "student_users" : student_user
"hits_comment" }|--|| "comments" : comment
"reported_comment" }|--|| "incumbent_users" : incumbent_user
"reported_comment" }|--|| "student_users" : student_user
"reported_comment" }|--|| "comments" : comment
```
