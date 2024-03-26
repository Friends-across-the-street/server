
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
