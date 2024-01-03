# DongA
> Generated by [`prisma-markdown`](https://github.com/samchon/prisma-markdown)

- [default](#default)

## default
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
    String company_welfare
    String company_location "nullable"
    DateTime createdAt
    DateTime updatedAt
}
"student_users" {
    Int id PK
    String email UK
    String password
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
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
}
"comments" {
    Int id PK
    String content
    Int parent_comment_id
    Int hit
    Int reported
    DateTime createdAt
    DateTime updatedAt
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
    Int post_id FK
}
"recommend_post" {
    Int id PK
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
    Int post_id FK
    DateTime createdAt
}
"reported_post" {
    Int id PK
    String reason
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
    Int post_id FK
    DateTime createdAt
}
"recommend_comment" {
    Int id PK
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
    Int comment_id FK
    DateTime createdAt
}
"reported_comment" {
    Int id PK
    String reason
    Int incumbent_user_id FK "nullable"
    Int student_user_id FK "nullable"
    Int comment_id FK
    DateTime createdAt
}
"posts" }o--|| "incumbent_users" : incumbent_user
"posts" }o--|| "student_users" : student_user
"comments" }o--|| "incumbent_users" : incumbent_user
"comments" }o--|| "student_users" : student_user
"comments" }|--|| "posts" : post
"recommend_post" }o--|| "incumbent_users" : incumbent_user
"recommend_post" }o--|| "student_users" : student_user
"recommend_post" }|--|| "posts" : post
"reported_post" }o--|| "incumbent_users" : incumbent_user
"reported_post" }o--|| "student_users" : student_user
"reported_post" }|--|| "posts" : post
"recommend_comment" }o--|| "incumbent_users" : incumbent_user
"recommend_comment" }o--|| "student_users" : student_user
"recommend_comment" }|--|| "comments" : comment
"reported_comment" }o--|| "incumbent_users" : incumbent_user
"reported_comment" }o--|| "student_users" : student_user
"reported_comment" }|--|| "comments" : comment
```

### `incumbent_users`

**Properties**
  - `id`: 
  - `email`: 
  - `password`: 
  - `name`: 
  - `age`: 
  - `gender`: 
  - `image`: 
  - `reported_num`: 
  - `advice_count`: 
  - `estimation_count`: 
  - `major`: 
  - `school`: 
  - `job_description`: 
  - `company_name`: 
  - `company_welfare`: 
  - `company_location`: 
  - `createdAt`: 
  - `updatedAt`: 

### `student_users`

**Properties**
  - `id`: 
  - `email`: 
  - `password`: 
  - `name`: 
  - `age`: 
  - `gender`: 
  - `image`: 
  - `reported_num`: 
  - `total_grade`: 
  - `advice_count`: 
  - `estimation_count`: 
  - `major`: 
  - `school`: 
  - `wish_job_description`: 
  - `wish_company_name`: 
  - `wish_company_welfare`: 
  - `wish_company_location`: 
  - `createdAt`: 
  - `updatedAt`: 

### `posts`

**Properties**
  - `id`: 
  - `title`: 
  - `content`: 
  - `view`: 
  - `hit`: 
  - `reported`: 
  - `createdAt`: 
  - `updatedAt`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 

### `comments`

**Properties**
  - `id`: 
  - `content`: 
  - `parent_comment_id`: 
  - `hit`: 
  - `reported`: 
  - `createdAt`: 
  - `updatedAt`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 
  - `post_id`: 

### `recommend_post`

**Properties**
  - `id`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 
  - `post_id`: 
  - `createdAt`: 

### `reported_post`

**Properties**
  - `id`: 
  - `reason`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 
  - `post_id`: 
  - `createdAt`: 

### `recommend_comment`

**Properties**
  - `id`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 
  - `comment_id`: 
  - `createdAt`: 

### `reported_comment`

**Properties**
  - `id`: 
  - `reason`: 
  - `incumbent_user_id`: 
  - `student_user_id`: 
  - `comment_id`: 
  - `createdAt`: 