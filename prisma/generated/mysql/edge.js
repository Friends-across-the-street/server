
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
} = require('./runtime/edge')


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
  jobId: 'jobId',
  schoolBranch: 'schoolBranch',
  schoolDayAndNight: 'schoolDayAndNight',
  schoolAffiliate: 'schoolAffiliate',
  schoolDegree: 'schoolDegree',
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
  wishJobId: 'wishJobId',
  portfolio: 'portfolio',
  schoolBranch: 'schoolBranch',
  schoolDayAndNight: 'schoolDayAndNight',
  schoolAffiliate: 'schoolAffiliate',
  schoolDegree: 'schoolDegree',
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
  bigJobKindId: 'bigJobKindId',
  midJobKindId: 'midJobKindId',
  smallJobKindId: 'smallJobKindId'
};

exports.Prisma.SchoolScalarFieldEnum = {
  id: 'id',
  name: 'name',
  location: 'location'
};

exports.Prisma.MajorScalarFieldEnum = {
  id: 'id',
  name: 'name'
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

exports.Prisma.JobScalarFieldEnum = {
  id: 'id',
  clusteringGroup: 'clusteringGroup',
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
  smallJobKind: 'smallJobKind',
  job: 'job'
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
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9teXNxbCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCmdlbmVyYXRvciBtYXJrZG93biB7CiAgcHJvdmlkZXIgPSAicHJpc21hLW1hcmtkb3duIgogIG91dHB1dCAgID0gIi4uL0VSRC5tZCIKICB0aXRsZSAgICA9ICJEb25nQSIKfQoKbW9kZWwgdXNlcnN7CiAgaWQgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgZW1haWwgU3RyaW5nICBAdW5pcXVlCiAgcGFzc3dvcmQgU3RyaW5nCiAgbmFtZSAgU3RyaW5nCiAgYWdlIEludAogIGdlbmRlciBHZW5kZXIKICBpbWFnZSBTdHJpbmc/CiAgdHlwZSB1c2VyVHlwZQogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCgogIC8vIHJlbGF0aW9uCiAgaW5jdW1iZW50X2FkZGl0aW9uYWwgaW5jdW1iZW50c0FkZGl0aW9uYWw/CiAgc3R1ZGVudF9hZGRpdGlvbmFsIHN0dWRlbnRzQWRkaXRpb25hbD8KICBwb3N0cyBwb3N0c1tdCiAgY29tbWVudHMgY29tbWVudHNbXQogIHJlY29tbWVuZF9wb3N0cyByZWNvbW1lbmRQb3N0c1tdIAogIHJlY29tbWVuZF9jb21tZW50cyByZWNvbW1lbmRDb21tZW50c1tdCiAgcmVwb3J0ZWRfcG9zdHMgcmVwb3J0ZWRQb3N0c1tdCiAgcmVwb3J0ZWRfY29tbWVudHMgcmVwb3J0ZWRDb21tZW50c1tdCiAgcmVwb3J0ZWRfdXNlcnMgcmVwb3J0ZWRVc2Vyc1tdCn0KCm1vZGVsIGluY3VtYmVudHNBZGRpdGlvbmFsIHsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgdXNlcklkIEludCBAdW5pcXVlIEBtYXAoInVzZXJfaWQiKQogIGNvbXBhbnlJZCBJbnQ/IEBtYXAoImNvbXBhbnlfaWQiKQogIHNjaG9vbElkIEludD8gQG1hcCgic2Nob29sX2lkIikKICBtYWpvcklkIEludD8gQG1hcCgibWFqb3JfaWQiKQogIGJpZ0pvYklkIEludD8gQG1hcCgiYmlnX2pvYl9pZCIpCiAgbWlkSm9iSWQgSW50PyBAbWFwKCJtaWRfam9iX2lkIikKICBzbWFsbEpvYklkIEludD8gQG1hcCgic21hbGxfam9iX2lkIikKICBqb2JJZCBJbnQ/IEBtYXAoImpvYl9pZCIpCiAgc2Nob29sQnJhbmNoIFN0cmluZz8gQG1hcCgic2Nob29sX2JyYW5jaCIpCiAgc2Nob29sRGF5QW5kTmlnaHQgU3RyaW5nPyBAbWFwKCJzY2hvb2xfZGF5X2FuZF9uaWdodCIpCiAgc2Nob29sQWZmaWxpYXRlIFN0cmluZz8gQG1hcCgic2Nob29sX2FmZmlsaWF0ZSIpCiAgc2Nob29sRGVncmVlIFN0cmluZz8gQG1hcCgic2Nob29sX2RlZ3JlZSIpCgogIHNob3J0U3BlYyBTdHJpbmc/IEBtYXAoInNob3J0X3NwZWMiKQogIHJlcG9ydGVkTnVtIEludCBAZGVmYXVsdCgwKSBAbWFwKCJyZXBvcnRlZF9udW0iKQogIGFkdmljZUNvdW50IEludCBAZGVmYXVsdCgwKSBAbWFwKCJhZHZpY2VfY291bnQiKQogIGVzdGltYXRpb25Db3VudCBGbG9hdCBAZGVmYXVsdCg1LjApIEBtYXAoImVzdGltYXRpb25fY291bnQiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICB1c2VycyB1c2VycyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgY29tcGFueSBjb21wYW55PyBAcmVsYXRpb24oZmllbGRzOiBbY29tcGFueUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzY2hvb2wgc2Nob29sPyBAcmVsYXRpb24oZmllbGRzOiBbc2Nob29sSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1ham9yIG1ham9yPyBAcmVsYXRpb24oZmllbGRzOiBbbWFqb3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pIAogIGpvYiBqb2I/IEByZWxhdGlvbihmaWVsZHM6IFtqb2JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQEBtYXAoImluY3VtYmVudHNfYWRkaXRpb25hbCIpCn0KCm1vZGVsIHN0dWRlbnRzQWRkaXRpb25hbCB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHVzZXJJZCBJbnQgQHVuaXF1ZSBAbWFwKCJ1c2VyX2lkIikKICB3aXNoQ29tcGFueUlkIEludD8gQG1hcCgid2lzaF9jb21wYW55X2lkIikKICBzY2hvb2xJZCBJbnQ/IEBtYXAoInNjaG9vbF9pZCIpCiAgbWFqb3JJZCBJbnQ/IEBtYXAoIm1ham9yX2lkIikKICB3aXNoQmlnSm9iSWQgSW50PyBAbWFwKCJ3aXNoX2JpZ19qb2JfaWQiKQogIHdpc2hNaWRKb2JJZCBJbnQ/IEBtYXAoIndpc2hfbWlkX2pvYl9pZCIpCiAgd2lzaFNtYWxsSm9iSWQgSW50PyBAbWFwKCJ3aXNoX3NtYWxsX2pvYl9pZCIpCiAgd2lzaEpvYklkIEludD8gQG1hcCgid2lzaF9qb2JfaWQiKQogIHBvcnRmb2xpbyBTdHJpbmc/IEBtYXAoInBvcnRmb2xpbyIpCiAgc2Nob29sQnJhbmNoIFN0cmluZz8gQG1hcCgic2Nob29sX2JyYW5jaCIpCiAgc2Nob29sRGF5QW5kTmlnaHQgU3RyaW5nPyBAbWFwKCJzY2hvb2xfZGF5X2FuZF9uaWdodCIpCiAgc2Nob29sQWZmaWxpYXRlIFN0cmluZz8gQG1hcCgic2Nob29sX2FmZmlsaWF0ZSIpCiAgc2Nob29sRGVncmVlIFN0cmluZz8gQG1hcCgic2Nob29sX2RlZ3JlZSIpCgogIHJlcG9ydGVkTnVtIEludCBAZGVmYXVsdCgwKSBAbWFwKCJyZXBvcnRlZF9udW0iKQogIHRvdGFsR3JhZGUgRmxvYXQ/IEBtYXAoInRvdGFsX2dyYWRlIikKICBhZHZpY2VDb3VudCBJbnQgQGRlZmF1bHQoMCkgQG1hcCgiYWR2aWNlX2NvdW50IikKICBlc3RpbWF0aW9uQ291bnQgRmxvYXQgQGRlZmF1bHQoNS4wKSBAbWFwKCJlc3RpbWF0aW9uQ291bnQiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICB1c2VycyB1c2VycyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgd2lzaENvbXBhbnkgY29tcGFueT8gQHJlbGF0aW9uKGZpZWxkczogW3dpc2hDb21wYW55SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHNjaG9vbCBzY2hvb2w/IEByZWxhdGlvbihmaWVsZHM6IFtzY2hvb2xJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbWFqb3IgbWFqb3I/IEByZWxhdGlvbihmaWVsZHM6IFttYWpvcklkXSwgcmVmZXJlbmNlczogW2lkXSkgCiAgd2lzaEpvYiBqb2I/IEByZWxhdGlvbihmaWVsZHM6IFt3aXNoSm9iSWRdLCByZWZlcmVuY2VzOiBbaWRdKQoJQEBtYXAoInN0dWRlbnRzX2FkZGl0aW9uYWwiKQp9Cgptb2RlbCBjYXRlZ29yeXsKICBpZCAgICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgbmFtZSBTdHJpbmcKICAvLyByZWxhdGlvbgogIHBvc3RzIHBvc3RzW10KfQoKbW9kZWwgcG9zdHMgewogIGlkICAgIEludCAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICB1c2VySWQgSW50PyBAbWFwKCJ1c2VyX2lkIikKICBjYXRlZ29yeUlkIEludD8gQG1hcCgiY2F0ZWdvcnlfaWQiKQogIHRpdGxlIFN0cmluZwogIGNvbnRlbnQgU3RyaW5nIEBkYi5UZXh0KCkKICB2aWV3IEludCBAZGVmYXVsdCgwKQogIHJlY29tbWVuZCBJbnQgQGRlZmF1bHQoMCkKICByZXBvcnRlZCBJbnQgQGRlZmF1bHQoMCkKICBjcmVhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9kYXRlIikKICB1cGRhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2RhdGUiKQogIC8vIHJlbGF0aW9uCiAgY2F0ZWdvcmllcyBjYXRlZ29yeT8gQHJlbGF0aW9uKGZpZWxkczogW2NhdGVnb3J5SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogU2V0TnVsbCkKICB1c2VycyB1c2Vycz8gQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBTZXROdWxsKQogIGNvbW1lbnRzIGNvbW1lbnRzW10KICByZWNvbW1lbmRfcG9zdHMgcmVjb21tZW5kUG9zdHNbXQogIHJlcG9ydGVkX3Bvc3RzIHJlcG9ydGVkUG9zdHNbXQp9Cgptb2RlbCBjb21tZW50cyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHBvc3RJZCBJbnQgQG1hcCgicG9zdF9pZCIpCiAgdXNlcklkIEludD8gQG1hcCgidXNlcl9pZCIpCiAgY29udGVudCBTdHJpbmcKICBwYXJlbnRDb21tZW50SWQgSW50PyBAbWFwKCJwYXJlbnRfY29tbWVudF9pZCIpCiAgcmVjb21tZW5kIEludCBAZGVmYXVsdCgwKQogIHJlcG9ydGVkIEludCBAZGVmYXVsdCgwKQogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIHVwZGF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpCiAgaXNEZWxldGUgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkgQG1hcCgiaXNfZGVsZXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcG9zdCBwb3N0cyBAcmVsYXRpb24oZmllbGRzOiBbcG9zdElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcGFyZW50ICBjb21tZW50cz8gQHJlbGF0aW9uKCJyZXBseSIsIGZpZWxkczogW3BhcmVudENvbW1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBTZXROdWxsKQogIHJlcGxpZXMgY29tbWVudHNbXSBAcmVsYXRpb24oInJlcGx5IikKICByZWNvbW1lbmRfY29tbWVudHMgcmVjb21tZW5kQ29tbWVudHNbXQogIHJlcG9ydGVkX2NvbW1lbnRzIHJlcG9ydGVkQ29tbWVudHNbXQp9Cgptb2RlbCByZWNvbW1lbmRQb3N0cyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHBvc3RJZCBJbnQgQG1hcCgicG9zdF9pZCIpCiAgdXNlcklkIEludCBAbWFwKCJ1c2VyX2lkIikKICBjcmVhdGVkRGF0ZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9kYXRlIikKICAvLyByZWxhdGlvbgogIHVzZXJzIHVzZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcG9zdCBwb3N0cyBAcmVsYXRpb24oZmllbGRzOiBbcG9zdElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCglAQG1hcCgicmVjb21tZW5kX3Bvc3RzIikKfQoKbW9kZWwgcmVwb3J0ZWRQb3N0cyB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIHBvc3RJZCBJbnQgQG1hcCgicG9zdF9pZCIpCiAgdXNlcklkIEludCBAbWFwKCJ1c2VyX2lkIikKICByZWFzb24gU3RyaW5nCiAgY3JlYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICB1c2VycyB1c2Vycz8gQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHBvc3QgcG9zdHMgQHJlbGF0aW9uKGZpZWxkczogW3Bvc3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoJQEBtYXAoInJlcG9ydGVkX3Bvc3RzIikKfQoKbW9kZWwgcmVjb21tZW5kQ29tbWVudHMgewogIGlkICAgIEludCAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICBjb21tZW50SWQgSW50IEBtYXAoImNvbW1lbnRfaWQiKQogIHVzZXJJZCBJbnQgQG1hcCgidXNlcl9pZCIpCiAgY3JlYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICBjb21tZW50IGNvbW1lbnRzIEByZWxhdGlvbihmaWVsZHM6IFtjb21tZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB1c2VycyB1c2Vycz8gQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoJQEBtYXAoInJlY29tbWVuZF9jb21tZW50cyIpCn0KCm1vZGVsIHJlcG9ydGVkQ29tbWVudHMgewogIGlkICAgIEludCAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICBjb21tZW50SWQgSW50IEBtYXAoImNvbW1lbnRfaWQiKQogIHVzZXJJZCBJbnQgQG1hcCgidXNlcl9pZCIpCiAgcmVhc29uIFN0cmluZwogIGNyZWF0ZWREYXRlIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2RhdGUiKQogIC8vIHJlbGF0aW9uCiAgY29tbWVudCBjb21tZW50cyBAcmVsYXRpb24oZmllbGRzOiBbY29tbWVudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgdXNlcnMgdXNlcnM/IEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCUBAbWFwKCJyZXBvcnRlZF9jb21tZW50cyIpCn0KCm1vZGVsIHJlcG9ydGVkVXNlcnMgewogIGlkICAgIEludCAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICB0YXJnZXRVc2VySWQgSW50IEBtYXAoInRhcmdldF91c2VyX2lkIikKICByZXBvcnRpbmdVc2VySWQgSW50IEBtYXAoInJlcG9ydGluZ191c2VyX2lkIikKICByZWFzb24gU3RyaW5nCiAgY3JlYXRlZERhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpCiAgLy8gcmVsYXRpb24KICB1c2VycyB1c2Vycz8gQHJlbGF0aW9uKGZpZWxkczogW3RhcmdldFVzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoJQEBtYXAoInJlcG9ydGVkX3VzZXJzIikKfQoKbW9kZWwgY29tcGFueSB7CiAgaWQgICAgSW50ICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgU3RyaW5nCiAgYWRkcmVzcyBTdHJpbmcKICBsb25naXR1ZGUgRmxvYXQKICBsYXRpdHVkZSBGbG9hdAogIHNjYWxlIFN0cmluZwogIGJpZ0pvYktpbmRJZCBJbnQgQG1hcCgiYmlnX2pvYl9raW5kX2lkIikKICBtaWRKb2JLaW5kSWQgSW50IEBtYXAoIm1pZF9qb2Jfa2luZF9pZCIpCiAgc21hbGxKb2JLaW5kSWQgSW50IEBtYXAoInNtYWxsX2pvYl9raW5kX2lkIikKCiAgYmlnSm9iS2luZCBiaWdKb2JLaW5kIEByZWxhdGlvbihmaWVsZHM6IFtiaWdKb2JLaW5kSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1pZEpvYktpbmQgbWlkSm9iS2luZCBAcmVsYXRpb24oZmllbGRzOiBbbWlkSm9iS2luZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzbWFsbEpvYktpbmQgc21hbGxKb2JLaW5kIEByZWxhdGlvbihmaWVsZHM6IFtzbWFsbEpvYktpbmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIGluY3VtZWJlbnQgaW5jdW1iZW50c0FkZGl0aW9uYWxbXQogIHN0dWRlbnQgc3R1ZGVudHNBZGRpdGlvbmFsW10KCn0KCm1vZGVsIHNjaG9vbCB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgU3RyaW5nCiAgbG9jYXRpb24gU3RyaW5nCiAgCiAgaW5jdW1lYmVudCBpbmN1bWJlbnRzQWRkaXRpb25hbFtdCiAgc3R1ZGVudCBzdHVkZW50c0FkZGl0aW9uYWxbXQp9Cgptb2RlbCBtYWpvciB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgU3RyaW5nCgogIGluY3VtZWJlbnQgaW5jdW1iZW50c0FkZGl0aW9uYWxbXQogIHN0dWRlbnQgc3R1ZGVudHNBZGRpdGlvbmFsW10KfQoKbW9kZWwgYmlnSm9iS2luZCB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgU3RyaW5nCgogIGNvbXBhbnkgY29tcGFueVtdCiAgbWlkSm9iS2luZCBtaWRKb2JLaW5kW10KICBAQG1hcCgiYmlnX2pvYl9raW5kIikKfQoKbW9kZWwgbWlkSm9iS2luZCB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGJpZ0pvYktpbmRJZCBJbnQgQG1hcCgiYmlnX2pvYl9raW5kX2lkIikKICBuYW1lIFN0cmluZwoKICBjb21wYW55IGNvbXBhbnlbXQogIGJpZ0pvYktpbmQgYmlnSm9iS2luZCBAcmVsYXRpb24oZmllbGRzOiBbYmlnSm9iS2luZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzbWFsbEpvYktpbmQgc21hbGxKb2JLaW5kW10KICBAQG1hcCgibWlkX2pvYl9raW5kIikKfQoKbW9kZWwgc21hbGxKb2JLaW5kIHsKICBpZCAgSW50IEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgbWlkSm9iS2luZElkIEludCBAbWFwKCJtaWRfam9iX2tpbmRfaWQiKQogIG5hbWUgU3RyaW5nCgogIGNvbXBhbnkgY29tcGFueVtdCiAgbWlkSm9iS2luZCBtaWRKb2JLaW5kIEByZWxhdGlvbihmaWVsZHM6IFttaWRKb2JLaW5kSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIEBAbWFwKCJzbWFsbF9qb2Jfa2luZCIpCn0KCm1vZGVsIGpvYiB7CiAgaWQgIEludCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGNsdXN0ZXJpbmdHcm91cCBJbnQgQG1hcCgiY2x1c3RlcmluZ19ncm91cCIpCiAgbmFtZSBTdHJpbmcKCiAgaW5jdW1lYmVudCBpbmN1bWJlbnRzQWRkaXRpb25hbFtdCiAgc3R1ZGVudCBzdHVkZW50c0FkZGl0aW9uYWxbXQp9CgplbnVtIEdlbmRlciB7CiAgbWFsZQogIGZlbWFsZQp9CgplbnVtIHVzZXJUeXBlIHsKICBpbmN1bWJlbnQKICBzdHVkZW50CiAgYWRtaW4KfQo=",
  "inlineSchemaHash": "ed8f2a2d996ee14c8f0d8bdf34b79c172bdd565c3516e284d5d0928e3a0f5de5"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"userType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"incumbent_additional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_additional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"studentsAdditionalTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendPosts\",\"relationName\":\"recommendPostsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendComments\",\"relationName\":\"recommendCommentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedPosts\",\"relationName\":\"reportedPostsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedComments\",\"relationName\":\"reportedCommentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedUsers\",\"relationName\":\"reportedUsersTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"incumbentsAdditional\":{\"dbName\":\"incumbents_additional\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyId\",\"dbName\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolId\",\"dbName\":\"school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"majorId\",\"dbName\":\"major_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobId\",\"dbName\":\"big_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobId\",\"dbName\":\"mid_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobId\",\"dbName\":\"small_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobId\",\"dbName\":\"job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolBranch\",\"dbName\":\"school_branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolDayAndNight\",\"dbName\":\"school_day_and_night\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolAffiliate\",\"dbName\":\"school_affiliate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolDegree\",\"dbName\":\"school_degree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortSpec\",\"dbName\":\"short_spec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportedNum\",\"dbName\":\"reported_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adviceCount\",\"dbName\":\"advice_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimationCount\",\"dbName\":\"estimation_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"incumbentsAdditionalTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyToincumbentsAdditional\",\"relationFromFields\":[\"companyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"school\",\"relationName\":\"incumbentsAdditionalToschool\",\"relationFromFields\":[\"schoolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"major\",\"relationName\":\"incumbentsAdditionalTomajor\",\"relationFromFields\":[\"majorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"job\",\"relationName\":\"incumbentsAdditionalTojob\",\"relationFromFields\":[\"jobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"studentsAdditional\":{\"dbName\":\"students_additional\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishCompanyId\",\"dbName\":\"wish_company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolId\",\"dbName\":\"school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"majorId\",\"dbName\":\"major_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishBigJobId\",\"dbName\":\"wish_big_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishMidJobId\",\"dbName\":\"wish_mid_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishSmallJobId\",\"dbName\":\"wish_small_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishJobId\",\"dbName\":\"wish_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"portfolio\",\"dbName\":\"portfolio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolBranch\",\"dbName\":\"school_branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolDayAndNight\",\"dbName\":\"school_day_and_night\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolAffiliate\",\"dbName\":\"school_affiliate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolDegree\",\"dbName\":\"school_degree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportedNum\",\"dbName\":\"reported_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalGrade\",\"dbName\":\"total_grade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adviceCount\",\"dbName\":\"advice_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimationCount\",\"dbName\":\"estimationCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"studentsAdditionalTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishCompany\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyTostudentsAdditional\",\"relationFromFields\":[\"wishCompanyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"school\",\"relationName\":\"schoolTostudentsAdditional\",\"relationFromFields\":[\"schoolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"major\",\"relationName\":\"majorTostudentsAdditional\",\"relationFromFields\":[\"majorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wishJob\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"job\",\"relationName\":\"jobTostudentsAdditional\",\"relationFromFields\":[\"wishJobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"category\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"categoryToposts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"posts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"dbName\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"relationName\":\"categoryToposts\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"postsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsToposts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendPosts\",\"relationName\":\"postsTorecommendPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedPosts\",\"relationName\":\"postsToreportedPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"comments\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentCommentId\",\"dbName\":\"parent_comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isDelete\",\"dbName\":\"is_delete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"commentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"commentsToposts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"reply\",\"relationFromFields\":[\"parentCommentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"reply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommend_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommendComments\",\"relationName\":\"commentsTorecommendComments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reported_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reportedComments\",\"relationName\":\"commentsToreportedComments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recommendPosts\":{\"dbName\":\"recommend_posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"recommendPostsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsTorecommendPosts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedPosts\":{\"dbName\":\"reported_posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedPostsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"posts\",\"relationName\":\"postsToreportedPosts\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recommendComments\":{\"dbName\":\"recommend_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentId\",\"dbName\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsTorecommendComments\",\"relationFromFields\":[\"commentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"recommendCommentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedComments\":{\"dbName\":\"reported_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentId\",\"dbName\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comments\",\"relationName\":\"commentsToreportedComments\",\"relationFromFields\":[\"commentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedCommentsTousers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reportedUsers\":{\"dbName\":\"reported_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetUserId\",\"dbName\":\"target_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportingUserId\",\"dbName\":\"reporting_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"reportedUsersTousers\",\"relationFromFields\":[\"targetUserId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"company\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKindId\",\"dbName\":\"big_job_kind_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKindId\",\"dbName\":\"mid_job_kind_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobKindId\",\"dbName\":\"small_job_kind_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bigJobKind\",\"relationName\":\"bigJobKindTocompany\",\"relationFromFields\":[\"bigJobKindId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"companyTomidJobKind\",\"relationFromFields\":[\"midJobKindId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"smallJobKind\",\"relationName\":\"companyTosmallJobKind\",\"relationFromFields\":[\"smallJobKindId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"companyToincumbentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"companyTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"school\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalToschool\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"schoolTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"major\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTomajor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"majorTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bigJobKind\":{\"dbName\":\"big_job_kind\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"bigJobKindTocompany\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"bigJobKindTomidJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"midJobKind\":{\"dbName\":\"mid_job_kind\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKindId\",\"dbName\":\"big_job_kind_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyTomidJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bigJobKind\",\"relationName\":\"bigJobKindTomidJobKind\",\"relationFromFields\":[\"bigJobKindId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smallJobKind\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"smallJobKind\",\"relationName\":\"midJobKindTosmallJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"smallJobKind\":{\"dbName\":\"small_job_kind\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKindId\",\"dbName\":\"mid_job_kind_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"company\",\"relationName\":\"companyTosmallJobKind\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"midJobKind\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"midJobKind\",\"relationName\":\"midJobKindTosmallJobKind\",\"relationFromFields\":[\"midJobKindId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"job\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clusteringGroup\",\"dbName\":\"clustering_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incumebent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"incumbentsAdditional\",\"relationName\":\"incumbentsAdditionalTojob\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentsAdditional\",\"relationName\":\"jobTostudentsAdditional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"userType\":{\"values\":[{\"name\":\"incumbent\",\"dbName\":null},{\"name\":\"student\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

