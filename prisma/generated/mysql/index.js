
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  age: 'age',
  gender: 'gender',
  image: 'image',
  type: 'type',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate'
};

exports.Prisma.IncumbentsAdditionalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  companyId: 'companyId',
  schoolId: 'schoolId',
  majorId: 'majorId',
  bigJobId: 'bigJobId',
  midJobId: 'midJobId',
  smallJobId: 'smallJobId',
  shortSpec: 'shortSpec',
  reportedNum: 'reportedNum',
  adviceCount: 'adviceCount',
  estimationCount: 'estimationCount',
  updatedDate: 'updatedDate'
};

exports.Prisma.StudentsAdditionalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  wishCompanyId: 'wishCompanyId',
  schoolId: 'schoolId',
  majorId: 'majorId',
  wishBigJobId: 'wishBigJobId',
  wishMidJobId: 'wishMidJobId',
  wishSmallJobId: 'wishSmallJobId',
  portfolio: 'portfolio',
  reportedNum: 'reportedNum',
  totalGrade: 'totalGrade',
  adviceCount: 'adviceCount',
  estimationCount: 'estimationCount',
  updatedDate: 'updatedDate'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PostsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  categoryId: 'categoryId',
  title: 'title',
  content: 'content',
  view: 'view',
  recommend: 'recommend',
  reported: 'reported',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  content: 'content',
  parentCommentId: 'parentCommentId',
  recommend: 'recommend',
  reported: 'reported',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate',
  isDelete: 'isDelete'
};

exports.Prisma.RecommendPostsScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  createdDate: 'createdDate'
};

exports.Prisma.ReportedPostsScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  reason: 'reason',
  createdDate: 'createdDate'
};

exports.Prisma.RecommendCommentsScalarFieldEnum = {
  id: 'id',
  commentId: 'commentId',
  userId: 'userId',
  createdDate: 'createdDate'
};

exports.Prisma.ReportedCommentsScalarFieldEnum = {
  id: 'id',
  commentId: 'commentId',
  userId: 'userId',
  reason: 'reason',
  createdDate: 'createdDate'
};

exports.Prisma.ReportedUsersScalarFieldEnum = {
  id: 'id',
  targetUserId: 'targetUserId',
  reportingUserId: 'reportingUserId',
  reason: 'reason',
  createdDate: 'createdDate'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  longitude: 'longitude',
  latitude: 'latitude',
  scale: 'scale',
  group: 'group'
};

exports.Prisma.SchoolScalarFieldEnum = {
  id: 'id',
  name: 'name',
  branch: 'branch'
};

exports.Prisma.MajorScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  name: 'name',
  dayAndNight: 'dayAndNight'
};

exports.Prisma.BigJobKindScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.MidJobKindScalarFieldEnum = {
  id: 'id',
  bigJobKindId: 'bigJobKindId',
  name: 'name'
};

exports.Prisma.SmallJobKindScalarFieldEnum = {
  id: 'id',
  midJobKindId: 'midJobKindId',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.userType = exports.$Enums.userType = {
  incumbent: 'incumbent',
  student: 'student',
  admin: 'admin'
};

exports.Prisma.ModelName = {
  users: 'users',
  incumbentsAdditional: 'incumbentsAdditional',
  studentsAdditional: 'studentsAdditional',
  category: 'category',
  posts: 'posts',
  comments: 'comments',
  recommendPosts: 'recommendPosts',
  reportedPosts: 'reportedPosts',
  recommendComments: 'recommendComments',
  reportedComments: 'reportedComments',
  reportedUsers: 'reportedUsers',
  company: 'company',
  school: 'school',
  major: 'major',
  bigJobKind: 'bigJobKind',
  midJobKind: 'midJobKind',
  smallJobKind: 'smallJobKind'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/kong/workspace/Indivisual/Friends-across-the-street/server/prisma/generated/mysql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9teXNxbCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCmdlbmVyYXRvciBtYXJrZG93biB7CiAgcHJvdmlkZXIgPSAicHJpc21hLW1hcmtkb3duIgogIG91dHB1dCAgID0gIi4uL0VSRC5tZCIKICB0aXRsZSAgICA9ICJEb25nQSIKfQoKbW9kZWwgdXNlcnN7CiAgaWQgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgZW1haWwgU3RyaW5nICBAdW5pcXVlCiAgcGFzc3dvcmQgU3RyaW5nCiAgbmFtZSAgU3RyaW5nCiAgYWdlIEludAogIGdlbmRlciBHZW5kZXIKICBpbWFnZSBTdHJpbmc/CiAgdHlwZSB1c2VyVHlwZQogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCgogIC8vIHJlbGF0aW9uCiAgaW5jdW1iZW50X2FkZGl0aW9uYWwgaW5jdW1iZW50c0FkZGl0aW9uYWw/CiAgc3R1ZGVudF9hZGRpdGlvbmFsIHN0dWRlbnRzQWRkaXRpb25hbD8KICBwb3N0cyBwb3N0c1tdCiAgY29tbWVudHMgY29tbWVudHNbXQogIHJlY29tbWVuZF9wb3N0cyByZWNvbW1lbmRQb3N0c1tdIAogIHJlY29tbWVuZF9jb21tZW50cyByZWNvbW1lbmRDb21tZW50c1tdCiAgcmVwb3J0ZWRfcG9zdHMgcmVwb3J0ZWRQb3N0c1tdCiAgcmVwb3J0ZWRfY29tbWVudHMgcmVwb3J0ZWRDb21tZW50c1tdCiAgcmVwb3J0ZWRfdXNlcnMgcmVwb3J0ZWRVc2Vyc1tdCn0KCm1vZGVsIGluY3VtYmVudHNBZGRpdGlvbmFsIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgdXNlcklkIEludCBAdW5pcXVlIEBtYXAoInVzZXJfaWQiKQogIGNvbXBhbnlJZCBJbnQ/IEBtYXAoImNvbXBhbnlfaWQiKQogIHNjaG9vbElkIEludD8gQG1hcCgic2Nob29sX2lkIikKICBtYWpvcklkIEludD8gQG1hcCgibWFqb3JfaWQiKQogIGJpZ0pvYklkIEludD8gQG1hcCgiYmlnX2pvYl9pZCIpCiAgbWlkSm9iSWQgSW50PyBAbWFwKCJtaWRfam9iX2lkIikKICBzbWFsbEpvYklkIEludD8gQG1hcCgic21hbGxfam9iX2lkIikKCiAgc2hvcnRTcGVjIFN0cmluZz8gQG1hcCgic2hvcnRfc3BlYyIpCiAgcmVwb3J0ZWROdW0gSW50IEBkZWZhdWx0KDApIEBtYXAoInJlcG9ydGVkX251bSIpCiAgYWR2aWNlQ291bnQgSW50IEBkZWZhdWx0KDApIEBtYXAoImFkdmljZV9jb3VudCIpCiAgZXN0aW1hdGlvbkNvdW50IEZsb2F0IEBkZWZhdWx0KDUuMCkgQG1hcCgiZXN0aW1hdGlvbl9jb3VudCIpCiAgdXBkYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBjb21wYW55IGNvbXBhbnk/IEByZWxhdGlvbihmaWVsZHM6IFtjb21wYW55SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHNjaG9vbCBzY2hvb2w/IEByZWxhdGlvbihmaWVsZHM6IFtzY2hvb2xJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbWFqb3IgbWFqb3I/IEByZWxhdGlvbihmaWVsZHM6IFttYWpvcklkXSwgcmVmZXJlbmNlczogW2lkXSkgCiAgYmlnSm9iS2luZCBiaWdKb2JLaW5kPyBAcmVsYXRpb24oZmllbGRzOiBbYmlnSm9iSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1pZEpvYktpbmQgbWlkSm9iS2luZD8gQHJlbGF0aW9uKGZpZWxkczogW21pZEpvYklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzbWFsbEpvYktpbmQgc21hbGxKb2JLaW5kPyBAcmVsYXRpb24oZmllbGRzOiBbc21hbGxKb2JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQEBtYXAoImluY3VtYmVudHNfYWRkaXRpb25hbCIpCn0KCm1vZGVsIHN0dWRlbnRzQWRkaXRpb25hbCB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHVzZXJJZCBJbnQgQHVuaXF1ZSBAbWFwKCJ1c2VyX2lkIikKICB3aXNoQ29tcGFueUlkIEludD8gQG1hcCgid2lzaF9jb21wYW55X2lkIikKICBzY2hvb2xJZCBJbnQ/IEBtYXAoInNjaG9vbF9pZCIpCiAgbWFqb3JJZCBJbnQ/IEBtYXAoIm1ham9yX2lkIikKICB3aXNoQmlnSm9iSWQgSW50PyBAbWFwKCJ3aXNoX2JpZ19qb2JfaWQiKQogIHdpc2hNaWRKb2JJZCBJbnQ/IEBtYXAoIndpc2hfbWlkX2pvYl9pZCIpCiAgd2lzaFNtYWxsSm9iSWQgSW50PyBAbWFwKCJ3aXNoX3NtYWxsX2pvYl9pZCIpCiAgcG9ydGZvbGlvIFN0cmluZz8gQG1hcCgicG9ydGZvbGlvIikKCiAgcmVwb3J0ZWROdW0gSW50IEBkZWZhdWx0KDApIEBtYXAoInJlcG9ydGVkX251bSIpCiAgdG90YWxHcmFkZSBGbG9hdD8gQG1hcCgidG90YWxfZ3JhZGUiKQogIGFkdmljZUNvdW50IEludCBAZGVmYXVsdCgwKSBAbWFwKCJhZHZpY2VfY291bnQiKQogIGVzdGltYXRpb25Db3VudCBGbG9hdCBAZGVmYXVsdCg1LjApIEBtYXAoImVzdGltYXRpb25Db3VudCIpCiAgdXBkYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB3aXNoQ29tcGFueSBjb21wYW55PyBAcmVsYXRpb24oZmllbGRzOiBbd2lzaENvbXBhbnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc2Nob29sIHNjaG9vbD8gQHJlbGF0aW9uKGZpZWxkczogW3NjaG9vbElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBtYWpvciBtYWpvcj8gQHJlbGF0aW9uKGZpZWxkczogW21ham9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKSAKICB3aXNoQmlnSm9iS2luZCBiaWdKb2JLaW5kPyBAcmVsYXRpb24oZmllbGRzOiBbd2lzaEJpZ0pvYklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB3aXNoTWlkSm9iS2luZCBtaWRKb2JLaW5kPyBAcmVsYXRpb24oZmllbGRzOiBbd2lzaE1pZEpvYklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB3aXNoU21hbGxKb2JLaW5kIHNtYWxsSm9iS2luZD8gQHJlbGF0aW9uKGZpZWxkczogW3dpc2hTbWFsbEpvYklkXSwgcmVmZXJlbmNlczogW2lkXSkKCUBAbWFwKCJzdHVkZW50c19hZGRpdGlvbmFsIikKfQoKbW9kZWwgY2F0ZWdvcnl7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgU3RyaW5nCiAgLy8gcmVsYXRpb24KICBwb3N0cyBwb3N0c1tdCn0KCm1vZGVsIHBvc3RzIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgdXNlcklkIEludD8gQG1hcCgidXNlcl9pZCIpCiAgY2F0ZWdvcnlJZCBJbnQ/IEBtYXAoImNhdGVnb3J5X2lkIikKICB0aXRsZSBTdHJpbmcKICBjb250ZW50IFN0cmluZwogIHZpZXcgSW50IEBkZWZhdWx0KDApCiAgcmVjb21tZW5kIEludCBAZGVmYXVsdCgwKQogIHJlcG9ydGVkIEludCBAZGVmYXVsdCgwKQogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICBjYXRlZ29yaWVzIGNhdGVnb3J5PyBAcmVsYXRpb24oZmllbGRzOiBbY2F0ZWdvcnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBTZXROdWxsKQogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFNldE51bGwpCiAgY29tbWVudHMgY29tbWVudHNbXQogIHJlY29tbWVuZF9wb3N0cyByZWNvbW1lbmRQb3N0c1tdCiAgcmVwb3J0ZWRfcG9zdHMgcmVwb3J0ZWRQb3N0c1tdCn0KCm1vZGVsIGNvbW1lbnRzIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgcG9zdElkIEludCBAbWFwKCJwb3N0X2lkIikKICB1c2VySWQgSW50PyBAbWFwKCJ1c2VyX2lkIikKICBjb250ZW50IFN0cmluZwogIHBhcmVudENvbW1lbnRJZCBJbnQ/IEBtYXAoInBhcmVudF9jb21tZW50X2lkIikKICByZWNvbW1lbmQgSW50IEBkZWZhdWx0KDApCiAgcmVwb3J0ZWQgSW50IEBkZWZhdWx0KDApCiAgY3JlYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpCiAgdXBkYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9kYXRlIikKICBpc0RlbGV0ZSBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKSBAbWFwKCJpc19kZWxldGUiKQogIC8vIHJlbGF0aW9uCiAgdXNlcnMgdXNlcnM/IEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwb3N0IHBvc3RzIEByZWxhdGlvbihmaWVsZHM6IFtwb3N0SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwYXJlbnQgIGNvbW1lbnRzPyBAcmVsYXRpb24oInJlcGx5IiwgZmllbGRzOiBbcGFyZW50Q29tbWVudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFNldE51bGwpCiAgcmVwbGllcyBjb21tZW50c1tdIEByZWxhdGlvbigicmVwbHkiKQogIHJlY29tbWVuZF9jb21tZW50cyByZWNvbW1lbmRDb21tZW50c1tdCiAgcmVwb3J0ZWRfY29tbWVudHMgcmVwb3J0ZWRDb21tZW50c1tdCn0KCm1vZGVsIHJlY29tbWVuZFBvc3RzIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgcG9zdElkIEludCBAbWFwKCJwb3N0X2lkIikKICB1c2VySWQgSW50IEBtYXAoInVzZXJfaWQiKQogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIC8vIHJlbGF0aW9uCiAgdXNlcnMgdXNlcnM/IEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwb3N0IHBvc3RzIEByZWxhdGlvbihmaWVsZHM6IFtwb3N0SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCUBAbWFwKCJyZWNvbW1lbmRfcG9zdHMiKQp9Cgptb2RlbCByZXBvcnRlZFBvc3RzIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgcG9zdElkIEludCBAbWFwKCJwb3N0X2lkIikKICB1c2VySWQgSW50IEBtYXAoInVzZXJfaWQiKQogIHJlYXNvbiBTdHJpbmcKICBjcmVhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcG9zdCBwb3N0cyBAcmVsYXRpb24oZmllbGRzOiBbcG9zdElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCglAQG1hcCgicmVwb3J0ZWRfcG9zdHMiKQp9Cgptb2RlbCByZWNvbW1lbmRDb21tZW50cyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGNvbW1lbnRJZCBJbnQgQG1hcCgiY29tbWVudF9pZCIpCiAgdXNlcklkIEludCBAbWFwKCJ1c2VyX2lkIikKICBjcmVhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIGNvbW1lbnQgY29tbWVudHMgQHJlbGF0aW9uKGZpZWxkczogW2NvbW1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCglAQG1hcCgicmVjb21tZW5kX2NvbW1lbnRzIikKfQoKbW9kZWwgcmVwb3J0ZWRDb21tZW50cyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGNvbW1lbnRJZCBJbnQgQG1hcCgiY29tbWVudF9pZCIpCiAgdXNlcklkIEludCBAbWFwKCJ1c2VyX2lkIikKICByZWFzb24gU3RyaW5nCiAgY3JlYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICBjb21tZW50IGNvbW1lbnRzIEByZWxhdGlvbihmaWVsZHM6IFtjb21tZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB1c2VycyB1c2Vycz8gQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoJQEBtYXAoInJlcG9ydGVkX2NvbW1lbnRzIikKfQoKbW9kZWwgcmVwb3J0ZWRVc2VycyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHRhcmdldFVzZXJJZCBJbnQgQG1hcCgidGFyZ2V0X3VzZXJfaWQiKQogIHJlcG9ydGluZ1VzZXJJZCBJbnQgQG1hcCgicmVwb3J0aW5nX3VzZXJfaWQiKQogIHJlYXNvbiBTdHJpbmcKICBjcmVhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdGFyZ2V0VXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCglAQG1hcCgicmVwb3J0ZWRfdXNlcnMiKQp9Cgptb2RlbCBjb21wYW55IHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgbmFtZSBTdHJpbmcKICBhZGRyZXNzIFN0cmluZwogIGxvbmdpdHVkZSBGbG9hdAogIGxhdGl0dWRlIEZsb2F0CiAgc2NhbGUgU3RyaW5nCiAgZ3JvdXAgSW50CgogIGluY3VtZWJlbnQgaW5jdW1iZW50c0FkZGl0aW9uYWxbXQogIHN0dWRlbnQgc3R1ZGVudHNBZGRpdGlvbmFsW10KfQoKbW9kZWwgc2Nob29sIHsKICBpZCAgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgbmFtZSBTdHJpbmcKICBicmFuY2ggU3RyaW5nCgogIG1ham9yIG1ham9yW10KICBpbmN1bWViZW50IGluY3VtYmVudHNBZGRpdGlvbmFsW10KICBzdHVkZW50IHN0dWRlbnRzQWRkaXRpb25hbFtdCn0KCm1vZGVsIG1ham9yIHsKICBpZCAgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgc2Nob29sSWQgSW50CiAgbmFtZSBTdHJpbmcKICBkYXlBbmROaWdodCBTdHJpbmcKCiAgc2Nob29sIHNjaG9vbCBAcmVsYXRpb24oZmllbGRzOiBbc2Nob29sSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBpbmN1bWViZW50IGluY3VtYmVudHNBZGRpdGlvbmFsW10KICBzdHVkZW50IHN0dWRlbnRzQWRkaXRpb25hbFtdCn0KCm1vZGVsIGJpZ0pvYktpbmQgewogIGlkICBJbnQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICBuYW1lIFN0cmluZwoKICBtaWRKb2JLaW5kIG1pZEpvYktpbmRbXQogIGluY3VtZWJlbnQgaW5jdW1iZW50c0FkZGl0aW9uYWxbXQogIHN0dWRlbnQgc3R1ZGVudHNBZGRpdGlvbmFsW10KfQoKbW9kZWwgbWlkSm9iS2luZCB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGJpZ0pvYktpbmRJZCBJbnQKICBuYW1lIFN0cmluZwoKICBiaWdKb2JLaW5kIGJpZ0pvYktpbmQgQHJlbGF0aW9uKGZpZWxkczogW2JpZ0pvYktpbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHNtYWxsSm9iS2luZCBzbWFsbEpvYktpbmRbXQogIGluY3VtZWJlbnQgaW5jdW1iZW50c0FkZGl0aW9uYWxbXQogIHN0dWRlbnQgc3R1ZGVudHNBZGRpdGlvbmFsW10KfQoKbW9kZWwgc21hbGxKb2JLaW5kIHsKICBpZCAgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgbWlkSm9iS2luZElkIEludAogIG5hbWUgU3RyaW5nCgogIG1pZEpvYktpbmQgbWlkSm9iS2luZCBAcmVsYXRpb24oZmllbGRzOiBbbWlkSm9iS2luZElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgaW5jdW1lYmVudCBpbmN1bWJlbnRzQWRkaXRpb25hbFtdCiAgc3R1ZGVudCBzdHVkZW50c0FkZGl0aW9uYWxbXQp9CgplbnVtIEdlbmRlciB7CiAgbWFsZQogIGZlbWFsZQp9CgplbnVtIHVzZXJUeXBlIHsKICBpbmN1bWJlbnQKICBzdHVkZW50CiAgYWRtaW4KfQo=",
  "inlineSchemaHash": "10c26a42f3fc8c48f04a5c9b1e25fbbe9db41f6ebf5f2ac101696a39af31ae32",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/mysql",
    "generated/mysql",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"userType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"incumbent_additional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_additional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"studentsAdditionalTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendPosts\",\"relationName\":\"recommendPostsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendComments\",\"relationName\":\"recommendCommentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedPosts\",\"relationName\":\"reportedPostsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedComments\",\"relationName\":\"reportedCommentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedUsers\",\"relationName\":\"reportedUsersTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"incumbentsAdditional\":{\"dbName\":\"incumbents_additional\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyId\",\"dbName\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolId\",\"dbName\":\"school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"majorId\",\"dbName\":\"major_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobId\",\"dbName\":\"big_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobId\",\"dbName\":\"mid_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobId\",\"dbName\":\"small_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortSpec\",\"dbName\":\"short_spec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportedNum\",\"dbName\":\"reported_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adviceCount\",\"dbName\":\"advice_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimationCount\",\"dbName\":\"estimation_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"incumbentsAdditionalTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyToincumbentsAdditional\",\"relationFromFields\":[\"companyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"school\",\"relationName\":\"incumbentsAdditionalToschool\",\"relationFromFields\":[\"schoolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"major\",\"relationName\":\"incumbentsAdditionalTomajor\",\"relationFromFields\":[\"majorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bigJobKind\",\"relationName\":\"bigJobKindToincumbentsAdditional\",\"relationFromFields\":[\"bigJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"incumbentsAdditionalTomidJobKind\",\"relationFromFields\":[\"midJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"smallJobKind\",\"relationName\":\"incumbentsAdditionalTosmallJobKind\",\"relationFromFields\":[\"smallJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"studentsAdditional\":{\"dbName\":\"students_additional\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishCompanyId\",\"dbName\":\"wish_company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolId\",\"dbName\":\"school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"majorId\",\"dbName\":\"major_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishBigJobId\",\"dbName\":\"wish_big_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishMidJobId\",\"dbName\":\"wish_mid_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishSmallJobId\",\"dbName\":\"wish_small_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"portfolio\",\"dbName\":\"portfolio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportedNum\",\"dbName\":\"reported_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalGrade\",\"dbName\":\"total_grade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adviceCount\",\"dbName\":\"advice_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimationCount\",\"dbName\":\"estimationCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"studentsAdditionalTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishCompany\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyTostudentsAdditional\",\"relationFromFields\":[\"wishCompanyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"school\",\"relationName\":\"schoolTostudentsAdditional\",\"relationFromFields\":[\"schoolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"major\",\"relationName\":\"majorTostudentsAdditional\",\"relationFromFields\":[\"majorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishBigJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bigJobKind\",\"relationName\":\"bigJobKindTostudentsAdditional\",\"relationFromFields\":[\"wishBigJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishMidJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"midJobKindTostudentsAdditional\",\"relationFromFields\":[\"wishMidJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishSmallJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"smallJobKind\",\"relationName\":\"smallJobKindTostudentsAdditional\",\"relationFromFields\":[\"wishSmallJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"category\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"categoryToposts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"posts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"dbName\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"relationName\":\"categoryToposts\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"postsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsToposts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendPosts\",\"relationName\":\"postsTorecommendPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedPosts\",\"relationName\":\"postsToreportedPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"comments\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentCommentId\",\"dbName\":\"parent_comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isDelete\",\"dbName\":\"is_delete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"commentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"commentsToposts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"reply\",\"relationFromFields\":[\"parentCommentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"reply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendComments\",\"relationName\":\"commentsTorecommendComments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedComments\",\"relationName\":\"commentsToreportedComments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recommendPosts\":{\"dbName\":\"recommend_posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"recommendPostsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsTorecommendPosts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedPosts\":{\"dbName\":\"reported_posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedPostsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsToreportedPosts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recommendComments\":{\"dbName\":\"recommend_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentId\",\"dbName\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsTorecommendComments\",\"relationFromFields\":[\"commentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"recommendCommentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedComments\":{\"dbName\":\"reported_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentId\",\"dbName\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsToreportedComments\",\"relationFromFields\":[\"commentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedCommentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedUsers\":{\"dbName\":\"reported_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetUserId\",\"dbName\":\"target_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportingUserId\",\"dbName\":\"reporting_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedUsersTousers\",\"relationFromFields\":[\"targetUserId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"company\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"companyToincumbentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"companyTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"school\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"major\",\"relationName\":\"majorToschool\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalToschool\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"schoolTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"major\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dayAndNight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"school\",\"relationName\":\"majorToschool\",\"relationFromFields\":[\"schoolId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTomajor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"majorTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bigJobKind\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"bigJobKindTomidJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"bigJobKindToincumbentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"bigJobKindTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"midJobKind\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKindId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bigJobKind\",\"relationName\":\"bigJobKindTomidJobKind\",\"relationFromFields\":[\"bigJobKindId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobKind\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"smallJobKind\",\"relationName\":\"midJobKindTosmallJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTomidJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"midJobKindTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"smallJobKind\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKindId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"midJobKindTosmallJobKind\",\"relationFromFields\":[\"midJobKindId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTosmallJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"smallJobKindTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"userType\":{\"values\":[{\"name\":\"incumbent\",\"dbName\":null},{\"name\":\"student\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/mysql/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/mysql/schema.prisma")
