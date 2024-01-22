
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model incumbents
 * 
 */
export type incumbents = $Result.DefaultSelection<Prisma.$incumbentsPayload>
/**
 * Model incumbents_additional
 * 
 */
export type incumbents_additional = $Result.DefaultSelection<Prisma.$incumbents_additionalPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model students_additional
 * 
 */
export type students_additional = $Result.DefaultSelection<Prisma.$students_additionalPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model recommend_posts
 * 
 */
export type recommend_posts = $Result.DefaultSelection<Prisma.$recommend_postsPayload>
/**
 * Model reported_posts
 * 
 */
export type reported_posts = $Result.DefaultSelection<Prisma.$reported_postsPayload>
/**
 * Model recommend_comments
 * 
 */
export type recommend_comments = $Result.DefaultSelection<Prisma.$recommend_commentsPayload>
/**
 * Model reported_comments
 * 
 */
export type reported_comments = $Result.DefaultSelection<Prisma.$reported_commentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Incumbents
 * const incumbents = await prisma.incumbents.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Incumbents
   * const incumbents = await prisma.incumbents.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.incumbents`: Exposes CRUD operations for the **incumbents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incumbents
    * const incumbents = await prisma.incumbents.findMany()
    * ```
    */
  get incumbents(): Prisma.incumbentsDelegate<ExtArgs>;

  /**
   * `prisma.incumbents_additional`: Exposes CRUD operations for the **incumbents_additional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incumbents_additionals
    * const incumbents_additionals = await prisma.incumbents_additional.findMany()
    * ```
    */
  get incumbents_additional(): Prisma.incumbents_additionalDelegate<ExtArgs>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs>;

  /**
   * `prisma.students_additional`: Exposes CRUD operations for the **students_additional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students_additionals
    * const students_additionals = await prisma.students_additional.findMany()
    * ```
    */
  get students_additional(): Prisma.students_additionalDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs>;

  /**
   * `prisma.recommend_posts`: Exposes CRUD operations for the **recommend_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommend_posts
    * const recommend_posts = await prisma.recommend_posts.findMany()
    * ```
    */
  get recommend_posts(): Prisma.recommend_postsDelegate<ExtArgs>;

  /**
   * `prisma.reported_posts`: Exposes CRUD operations for the **reported_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reported_posts
    * const reported_posts = await prisma.reported_posts.findMany()
    * ```
    */
  get reported_posts(): Prisma.reported_postsDelegate<ExtArgs>;

  /**
   * `prisma.recommend_comments`: Exposes CRUD operations for the **recommend_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommend_comments
    * const recommend_comments = await prisma.recommend_comments.findMany()
    * ```
    */
  get recommend_comments(): Prisma.recommend_commentsDelegate<ExtArgs>;

  /**
   * `prisma.reported_comments`: Exposes CRUD operations for the **reported_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reported_comments
    * const reported_comments = await prisma.reported_comments.findMany()
    * ```
    */
  get reported_comments(): Prisma.reported_commentsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    incumbents: 'incumbents',
    incumbents_additional: 'incumbents_additional',
    students: 'students',
    students_additional: 'students_additional',
    category: 'category',
    posts: 'posts',
    comments: 'comments',
    recommend_posts: 'recommend_posts',
    reported_posts: 'reported_posts',
    recommend_comments: 'recommend_comments',
    reported_comments: 'reported_comments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'incumbents' | 'incumbents_additional' | 'students' | 'students_additional' | 'category' | 'posts' | 'comments' | 'recommend_posts' | 'reported_posts' | 'recommend_comments' | 'reported_comments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      incumbents: {
        payload: Prisma.$incumbentsPayload<ExtArgs>
        fields: Prisma.incumbentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incumbentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incumbentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          findFirst: {
            args: Prisma.incumbentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incumbentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          findMany: {
            args: Prisma.incumbentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>[]
          }
          create: {
            args: Prisma.incumbentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          createMany: {
            args: Prisma.incumbentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.incumbentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          update: {
            args: Prisma.incumbentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          deleteMany: {
            args: Prisma.incumbentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.incumbentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.incumbentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbentsPayload>
          }
          aggregate: {
            args: Prisma.IncumbentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIncumbents>
          }
          groupBy: {
            args: Prisma.incumbentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IncumbentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.incumbentsCountArgs<ExtArgs>,
            result: $Utils.Optional<IncumbentsCountAggregateOutputType> | number
          }
        }
      }
      incumbents_additional: {
        payload: Prisma.$incumbents_additionalPayload<ExtArgs>
        fields: Prisma.incumbents_additionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incumbents_additionalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incumbents_additionalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          findFirst: {
            args: Prisma.incumbents_additionalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incumbents_additionalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          findMany: {
            args: Prisma.incumbents_additionalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>[]
          }
          create: {
            args: Prisma.incumbents_additionalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          createMany: {
            args: Prisma.incumbents_additionalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.incumbents_additionalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          update: {
            args: Prisma.incumbents_additionalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          deleteMany: {
            args: Prisma.incumbents_additionalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.incumbents_additionalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.incumbents_additionalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$incumbents_additionalPayload>
          }
          aggregate: {
            args: Prisma.Incumbents_additionalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIncumbents_additional>
          }
          groupBy: {
            args: Prisma.incumbents_additionalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Incumbents_additionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.incumbents_additionalCountArgs<ExtArgs>,
            result: $Utils.Optional<Incumbents_additionalCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      students_additional: {
        payload: Prisma.$students_additionalPayload<ExtArgs>
        fields: Prisma.students_additionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.students_additionalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.students_additionalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          findFirst: {
            args: Prisma.students_additionalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.students_additionalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          findMany: {
            args: Prisma.students_additionalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>[]
          }
          create: {
            args: Prisma.students_additionalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          createMany: {
            args: Prisma.students_additionalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.students_additionalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          update: {
            args: Prisma.students_additionalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          deleteMany: {
            args: Prisma.students_additionalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.students_additionalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.students_additionalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$students_additionalPayload>
          }
          aggregate: {
            args: Prisma.Students_additionalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudents_additional>
          }
          groupBy: {
            args: Prisma.students_additionalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Students_additionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.students_additionalCountArgs<ExtArgs>,
            result: $Utils.Optional<Students_additionalCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>,
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      recommend_posts: {
        payload: Prisma.$recommend_postsPayload<ExtArgs>
        fields: Prisma.recommend_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recommend_postsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recommend_postsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          findFirst: {
            args: Prisma.recommend_postsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recommend_postsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          findMany: {
            args: Prisma.recommend_postsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>[]
          }
          create: {
            args: Prisma.recommend_postsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          createMany: {
            args: Prisma.recommend_postsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.recommend_postsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          update: {
            args: Prisma.recommend_postsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          deleteMany: {
            args: Prisma.recommend_postsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.recommend_postsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.recommend_postsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_postsPayload>
          }
          aggregate: {
            args: Prisma.Recommend_postsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecommend_posts>
          }
          groupBy: {
            args: Prisma.recommend_postsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Recommend_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.recommend_postsCountArgs<ExtArgs>,
            result: $Utils.Optional<Recommend_postsCountAggregateOutputType> | number
          }
        }
      }
      reported_posts: {
        payload: Prisma.$reported_postsPayload<ExtArgs>
        fields: Prisma.reported_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reported_postsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reported_postsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          findFirst: {
            args: Prisma.reported_postsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reported_postsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          findMany: {
            args: Prisma.reported_postsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>[]
          }
          create: {
            args: Prisma.reported_postsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          createMany: {
            args: Prisma.reported_postsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reported_postsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          update: {
            args: Prisma.reported_postsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          deleteMany: {
            args: Prisma.reported_postsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reported_postsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reported_postsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_postsPayload>
          }
          aggregate: {
            args: Prisma.Reported_postsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReported_posts>
          }
          groupBy: {
            args: Prisma.reported_postsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Reported_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reported_postsCountArgs<ExtArgs>,
            result: $Utils.Optional<Reported_postsCountAggregateOutputType> | number
          }
        }
      }
      recommend_comments: {
        payload: Prisma.$recommend_commentsPayload<ExtArgs>
        fields: Prisma.recommend_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recommend_commentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recommend_commentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          findFirst: {
            args: Prisma.recommend_commentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recommend_commentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          findMany: {
            args: Prisma.recommend_commentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>[]
          }
          create: {
            args: Prisma.recommend_commentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          createMany: {
            args: Prisma.recommend_commentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.recommend_commentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          update: {
            args: Prisma.recommend_commentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          deleteMany: {
            args: Prisma.recommend_commentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.recommend_commentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.recommend_commentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recommend_commentsPayload>
          }
          aggregate: {
            args: Prisma.Recommend_commentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecommend_comments>
          }
          groupBy: {
            args: Prisma.recommend_commentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Recommend_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.recommend_commentsCountArgs<ExtArgs>,
            result: $Utils.Optional<Recommend_commentsCountAggregateOutputType> | number
          }
        }
      }
      reported_comments: {
        payload: Prisma.$reported_commentsPayload<ExtArgs>
        fields: Prisma.reported_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reported_commentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reported_commentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          findFirst: {
            args: Prisma.reported_commentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reported_commentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          findMany: {
            args: Prisma.reported_commentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>[]
          }
          create: {
            args: Prisma.reported_commentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          createMany: {
            args: Prisma.reported_commentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reported_commentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          update: {
            args: Prisma.reported_commentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          deleteMany: {
            args: Prisma.reported_commentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reported_commentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reported_commentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reported_commentsPayload>
          }
          aggregate: {
            args: Prisma.Reported_commentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReported_comments>
          }
          groupBy: {
            args: Prisma.reported_commentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Reported_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reported_commentsCountArgs<ExtArgs>,
            result: $Utils.Optional<Reported_commentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IncumbentsCountOutputType
   */

  export type IncumbentsCountOutputType = {
    posts: number
    comments: number
    recommend_posts: number
    recommend_comments: number
    reported_posts: number
    reported_comments: number
  }

  export type IncumbentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | IncumbentsCountOutputTypeCountPostsArgs
    comments?: boolean | IncumbentsCountOutputTypeCountCommentsArgs
    recommend_posts?: boolean | IncumbentsCountOutputTypeCountRecommend_postsArgs
    recommend_comments?: boolean | IncumbentsCountOutputTypeCountRecommend_commentsArgs
    reported_posts?: boolean | IncumbentsCountOutputTypeCountReported_postsArgs
    reported_comments?: boolean | IncumbentsCountOutputTypeCountReported_commentsArgs
  }

  // Custom InputTypes

  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncumbentsCountOutputType
     */
    select?: IncumbentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountRecommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_postsWhereInput
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountRecommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_commentsWhereInput
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountReported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_postsWhereInput
  }


  /**
   * IncumbentsCountOutputType without action
   */
  export type IncumbentsCountOutputTypeCountReported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_commentsWhereInput
  }



  /**
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    posts: number
    comments: number
    recommend_posts: number
    recommend_comments: number
    reported_posts: number
    reported_comments: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | StudentsCountOutputTypeCountPostsArgs
    comments?: boolean | StudentsCountOutputTypeCountCommentsArgs
    recommend_posts?: boolean | StudentsCountOutputTypeCountRecommend_postsArgs
    recommend_comments?: boolean | StudentsCountOutputTypeCountRecommend_commentsArgs
    reported_posts?: boolean | StudentsCountOutputTypeCountReported_postsArgs
    reported_comments?: boolean | StudentsCountOutputTypeCountReported_commentsArgs
  }

  // Custom InputTypes

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountRecommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_postsWhereInput
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountRecommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_commentsWhereInput
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountReported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_postsWhereInput
  }


  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountReported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_commentsWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }



  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
    recommend_posts: number
    reported_posts: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    recommend_posts?: boolean | PostsCountOutputTypeCountRecommend_postsArgs
    reported_posts?: boolean | PostsCountOutputTypeCountReported_postsArgs
  }

  // Custom InputTypes

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountRecommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_postsWhereInput
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountReported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_postsWhereInput
  }



  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    replies: number
    recommend_comments: number
    reported_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentsCountOutputTypeCountRepliesArgs
    recommend_comments?: boolean | CommentsCountOutputTypeCountRecommend_commentsArgs
    reported_comments?: boolean | CommentsCountOutputTypeCountReported_commentsArgs
  }

  // Custom InputTypes

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRecommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_commentsWhereInput
  }


  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountReported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_commentsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model incumbents
   */

  export type AggregateIncumbents = {
    _count: IncumbentsCountAggregateOutputType | null
    _avg: IncumbentsAvgAggregateOutputType | null
    _sum: IncumbentsSumAggregateOutputType | null
    _min: IncumbentsMinAggregateOutputType | null
    _max: IncumbentsMaxAggregateOutputType | null
  }

  export type IncumbentsAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type IncumbentsSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type IncumbentsMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    createdDate: Date | null
  }

  export type IncumbentsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    createdDate: Date | null
  }

  export type IncumbentsCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    age: number
    gender: number
    createdDate: number
    _all: number
  }


  export type IncumbentsAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type IncumbentsSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type IncumbentsMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
  }

  export type IncumbentsMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
  }

  export type IncumbentsCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
    _all?: true
  }

  export type IncumbentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incumbents to aggregate.
     */
    where?: incumbentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents to fetch.
     */
    orderBy?: incumbentsOrderByWithRelationInput | incumbentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incumbentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incumbents
    **/
    _count?: true | IncumbentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncumbentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncumbentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncumbentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncumbentsMaxAggregateInputType
  }

  export type GetIncumbentsAggregateType<T extends IncumbentsAggregateArgs> = {
        [P in keyof T & keyof AggregateIncumbents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncumbents[P]>
      : GetScalarType<T[P], AggregateIncumbents[P]>
  }




  export type incumbentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incumbentsWhereInput
    orderBy?: incumbentsOrderByWithAggregationInput | incumbentsOrderByWithAggregationInput[]
    by: IncumbentsScalarFieldEnum[] | IncumbentsScalarFieldEnum
    having?: incumbentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncumbentsCountAggregateInputType | true
    _avg?: IncumbentsAvgAggregateInputType
    _sum?: IncumbentsSumAggregateInputType
    _min?: IncumbentsMinAggregateInputType
    _max?: IncumbentsMaxAggregateInputType
  }

  export type IncumbentsGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate: Date
    _count: IncumbentsCountAggregateOutputType | null
    _avg: IncumbentsAvgAggregateOutputType | null
    _sum: IncumbentsSumAggregateOutputType | null
    _min: IncumbentsMinAggregateOutputType | null
    _max: IncumbentsMaxAggregateOutputType | null
  }

  type GetIncumbentsGroupByPayload<T extends incumbentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncumbentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncumbentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncumbentsGroupByOutputType[P]>
            : GetScalarType<T[P], IncumbentsGroupByOutputType[P]>
        }
      >
    >


  export type incumbentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    createdDate?: boolean
    incumbent_additional?: boolean | incumbents$incumbent_additionalArgs<ExtArgs>
    posts?: boolean | incumbents$postsArgs<ExtArgs>
    comments?: boolean | incumbents$commentsArgs<ExtArgs>
    recommend_posts?: boolean | incumbents$recommend_postsArgs<ExtArgs>
    recommend_comments?: boolean | incumbents$recommend_commentsArgs<ExtArgs>
    reported_posts?: boolean | incumbents$reported_postsArgs<ExtArgs>
    reported_comments?: boolean | incumbents$reported_commentsArgs<ExtArgs>
    _count?: boolean | IncumbentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incumbents"]>

  export type incumbentsSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    createdDate?: boolean
  }

  export type incumbentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incumbent_additional?: boolean | incumbents$incumbent_additionalArgs<ExtArgs>
    posts?: boolean | incumbents$postsArgs<ExtArgs>
    comments?: boolean | incumbents$commentsArgs<ExtArgs>
    recommend_posts?: boolean | incumbents$recommend_postsArgs<ExtArgs>
    recommend_comments?: boolean | incumbents$recommend_commentsArgs<ExtArgs>
    reported_posts?: boolean | incumbents$reported_postsArgs<ExtArgs>
    reported_comments?: boolean | incumbents$reported_commentsArgs<ExtArgs>
    _count?: boolean | IncumbentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $incumbentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "incumbents"
    objects: {
      incumbent_additional: Prisma.$incumbents_additionalPayload<ExtArgs> | null
      posts: Prisma.$postsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      recommend_posts: Prisma.$recommend_postsPayload<ExtArgs>[]
      recommend_comments: Prisma.$recommend_commentsPayload<ExtArgs>[]
      reported_posts: Prisma.$reported_postsPayload<ExtArgs>[]
      reported_comments: Prisma.$reported_commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      age: number
      gender: $Enums.Gender
      createdDate: Date
    }, ExtArgs["result"]["incumbents"]>
    composites: {}
  }


  type incumbentsGetPayload<S extends boolean | null | undefined | incumbentsDefaultArgs> = $Result.GetResult<Prisma.$incumbentsPayload, S>

  type incumbentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<incumbentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: IncumbentsCountAggregateInputType | true
    }

  export interface incumbentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incumbents'], meta: { name: 'incumbents' } }
    /**
     * Find zero or one Incumbents that matches the filter.
     * @param {incumbentsFindUniqueArgs} args - Arguments to find a Incumbents
     * @example
     * // Get one Incumbents
     * const incumbents = await prisma.incumbents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends incumbentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsFindUniqueArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Incumbents that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {incumbentsFindUniqueOrThrowArgs} args - Arguments to find a Incumbents
     * @example
     * // Get one Incumbents
     * const incumbents = await prisma.incumbents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends incumbentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Incumbents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsFindFirstArgs} args - Arguments to find a Incumbents
     * @example
     * // Get one Incumbents
     * const incumbents = await prisma.incumbents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends incumbentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsFindFirstArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Incumbents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsFindFirstOrThrowArgs} args - Arguments to find a Incumbents
     * @example
     * // Get one Incumbents
     * const incumbents = await prisma.incumbents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends incumbentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Incumbents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incumbents
     * const incumbents = await prisma.incumbents.findMany()
     * 
     * // Get first 10 Incumbents
     * const incumbents = await prisma.incumbents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incumbentsWithIdOnly = await prisma.incumbents.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends incumbentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Incumbents.
     * @param {incumbentsCreateArgs} args - Arguments to create a Incumbents.
     * @example
     * // Create one Incumbents
     * const Incumbents = await prisma.incumbents.create({
     *   data: {
     *     // ... data to create a Incumbents
     *   }
     * })
     * 
    **/
    create<T extends incumbentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsCreateArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Incumbents.
     *     @param {incumbentsCreateManyArgs} args - Arguments to create many Incumbents.
     *     @example
     *     // Create many Incumbents
     *     const incumbents = await prisma.incumbents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends incumbentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incumbents.
     * @param {incumbentsDeleteArgs} args - Arguments to delete one Incumbents.
     * @example
     * // Delete one Incumbents
     * const Incumbents = await prisma.incumbents.delete({
     *   where: {
     *     // ... filter to delete one Incumbents
     *   }
     * })
     * 
    **/
    delete<T extends incumbentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsDeleteArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Incumbents.
     * @param {incumbentsUpdateArgs} args - Arguments to update one Incumbents.
     * @example
     * // Update one Incumbents
     * const incumbents = await prisma.incumbents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends incumbentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsUpdateArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Incumbents.
     * @param {incumbentsDeleteManyArgs} args - Arguments to filter Incumbents to delete.
     * @example
     * // Delete a few Incumbents
     * const { count } = await prisma.incumbents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends incumbentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incumbents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incumbents
     * const incumbents = await prisma.incumbents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends incumbentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incumbents.
     * @param {incumbentsUpsertArgs} args - Arguments to update or create a Incumbents.
     * @example
     * // Update or create a Incumbents
     * const incumbents = await prisma.incumbents.upsert({
     *   create: {
     *     // ... data to create a Incumbents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incumbents we want to update
     *   }
     * })
    **/
    upsert<T extends incumbentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, incumbentsUpsertArgs<ExtArgs>>
    ): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Incumbents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsCountArgs} args - Arguments to filter Incumbents to count.
     * @example
     * // Count the number of Incumbents
     * const count = await prisma.incumbents.count({
     *   where: {
     *     // ... the filter for the Incumbents we want to count
     *   }
     * })
    **/
    count<T extends incumbentsCountArgs>(
      args?: Subset<T, incumbentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncumbentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incumbents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncumbentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncumbentsAggregateArgs>(args: Subset<T, IncumbentsAggregateArgs>): Prisma.PrismaPromise<GetIncumbentsAggregateType<T>>

    /**
     * Group by Incumbents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends incumbentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incumbentsGroupByArgs['orderBy'] }
        : { orderBy?: incumbentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, incumbentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncumbentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the incumbents model
   */
  readonly fields: incumbentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incumbents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incumbentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incumbent_additional<T extends incumbents$incumbent_additionalArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$incumbent_additionalArgs<ExtArgs>>): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends incumbents$postsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends incumbents$commentsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_posts<T extends incumbents$recommend_postsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$recommend_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_comments<T extends incumbents$recommend_commentsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$recommend_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_posts<T extends incumbents$reported_postsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$reported_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_comments<T extends incumbents$reported_commentsArgs<ExtArgs> = {}>(args?: Subset<T, incumbents$reported_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the incumbents model
   */ 
  interface incumbentsFieldRefs {
    readonly id: FieldRef<"incumbents", 'Int'>
    readonly email: FieldRef<"incumbents", 'String'>
    readonly password: FieldRef<"incumbents", 'String'>
    readonly name: FieldRef<"incumbents", 'String'>
    readonly age: FieldRef<"incumbents", 'Int'>
    readonly gender: FieldRef<"incumbents", 'Gender'>
    readonly createdDate: FieldRef<"incumbents", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * incumbents findUnique
   */
  export type incumbentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter, which incumbents to fetch.
     */
    where: incumbentsWhereUniqueInput
  }


  /**
   * incumbents findUniqueOrThrow
   */
  export type incumbentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter, which incumbents to fetch.
     */
    where: incumbentsWhereUniqueInput
  }


  /**
   * incumbents findFirst
   */
  export type incumbentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter, which incumbents to fetch.
     */
    where?: incumbentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents to fetch.
     */
    orderBy?: incumbentsOrderByWithRelationInput | incumbentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incumbents.
     */
    cursor?: incumbentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incumbents.
     */
    distinct?: IncumbentsScalarFieldEnum | IncumbentsScalarFieldEnum[]
  }


  /**
   * incumbents findFirstOrThrow
   */
  export type incumbentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter, which incumbents to fetch.
     */
    where?: incumbentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents to fetch.
     */
    orderBy?: incumbentsOrderByWithRelationInput | incumbentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incumbents.
     */
    cursor?: incumbentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incumbents.
     */
    distinct?: IncumbentsScalarFieldEnum | IncumbentsScalarFieldEnum[]
  }


  /**
   * incumbents findMany
   */
  export type incumbentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter, which incumbents to fetch.
     */
    where?: incumbentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents to fetch.
     */
    orderBy?: incumbentsOrderByWithRelationInput | incumbentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incumbents.
     */
    cursor?: incumbentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents.
     */
    skip?: number
    distinct?: IncumbentsScalarFieldEnum | IncumbentsScalarFieldEnum[]
  }


  /**
   * incumbents create
   */
  export type incumbentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * The data needed to create a incumbents.
     */
    data: XOR<incumbentsCreateInput, incumbentsUncheckedCreateInput>
  }


  /**
   * incumbents createMany
   */
  export type incumbentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incumbents.
     */
    data: incumbentsCreateManyInput | incumbentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * incumbents update
   */
  export type incumbentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * The data needed to update a incumbents.
     */
    data: XOR<incumbentsUpdateInput, incumbentsUncheckedUpdateInput>
    /**
     * Choose, which incumbents to update.
     */
    where: incumbentsWhereUniqueInput
  }


  /**
   * incumbents updateMany
   */
  export type incumbentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incumbents.
     */
    data: XOR<incumbentsUpdateManyMutationInput, incumbentsUncheckedUpdateManyInput>
    /**
     * Filter which incumbents to update
     */
    where?: incumbentsWhereInput
  }


  /**
   * incumbents upsert
   */
  export type incumbentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * The filter to search for the incumbents to update in case it exists.
     */
    where: incumbentsWhereUniqueInput
    /**
     * In case the incumbents found by the `where` argument doesn't exist, create a new incumbents with this data.
     */
    create: XOR<incumbentsCreateInput, incumbentsUncheckedCreateInput>
    /**
     * In case the incumbents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incumbentsUpdateInput, incumbentsUncheckedUpdateInput>
  }


  /**
   * incumbents delete
   */
  export type incumbentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    /**
     * Filter which incumbents to delete.
     */
    where: incumbentsWhereUniqueInput
  }


  /**
   * incumbents deleteMany
   */
  export type incumbentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incumbents to delete
     */
    where?: incumbentsWhereInput
  }


  /**
   * incumbents.incumbent_additional
   */
  export type incumbents$incumbent_additionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    where?: incumbents_additionalWhereInput
  }


  /**
   * incumbents.posts
   */
  export type incumbents$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * incumbents.comments
   */
  export type incumbents$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * incumbents.recommend_posts
   */
  export type incumbents$recommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    where?: recommend_postsWhereInput
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    cursor?: recommend_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * incumbents.recommend_comments
   */
  export type incumbents$recommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    where?: recommend_commentsWhereInput
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    cursor?: recommend_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * incumbents.reported_posts
   */
  export type incumbents$reported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    where?: reported_postsWhereInput
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    cursor?: reported_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * incumbents.reported_comments
   */
  export type incumbents$reported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    where?: reported_commentsWhereInput
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    cursor?: reported_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * incumbents without action
   */
  export type incumbentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
  }



  /**
   * Model incumbents_additional
   */

  export type AggregateIncumbents_additional = {
    _count: Incumbents_additionalCountAggregateOutputType | null
    _avg: Incumbents_additionalAvgAggregateOutputType | null
    _sum: Incumbents_additionalSumAggregateOutputType | null
    _min: Incumbents_additionalMinAggregateOutputType | null
    _max: Incumbents_additionalMaxAggregateOutputType | null
  }

  export type Incumbents_additionalAvgAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    reportedNum: number | null
    adviceCount: number | null
    estimationCount: number | null
  }

  export type Incumbents_additionalSumAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    reportedNum: number | null
    adviceCount: number | null
    estimationCount: number | null
  }

  export type Incumbents_additionalMinAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    image: string | null
    school: string | null
    jobDescription: string | null
    reportedNum: number | null
    adviceCount: number | null
    estimationCount: number | null
    major: string | null
    companyName: string | null
    companyWelfare: string | null
    companyLocation: string | null
    updatedDate: Date | null
  }

  export type Incumbents_additionalMaxAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    image: string | null
    school: string | null
    jobDescription: string | null
    reportedNum: number | null
    adviceCount: number | null
    estimationCount: number | null
    major: string | null
    companyName: string | null
    companyWelfare: string | null
    companyLocation: string | null
    updatedDate: Date | null
  }

  export type Incumbents_additionalCountAggregateOutputType = {
    id: number
    incumbentId: number
    image: number
    school: number
    jobDescription: number
    reportedNum: number
    adviceCount: number
    estimationCount: number
    major: number
    companyName: number
    companyWelfare: number
    companyLocation: number
    updatedDate: number
    _all: number
  }


  export type Incumbents_additionalAvgAggregateInputType = {
    id?: true
    incumbentId?: true
    reportedNum?: true
    adviceCount?: true
    estimationCount?: true
  }

  export type Incumbents_additionalSumAggregateInputType = {
    id?: true
    incumbentId?: true
    reportedNum?: true
    adviceCount?: true
    estimationCount?: true
  }

  export type Incumbents_additionalMinAggregateInputType = {
    id?: true
    incumbentId?: true
    image?: true
    school?: true
    jobDescription?: true
    reportedNum?: true
    adviceCount?: true
    estimationCount?: true
    major?: true
    companyName?: true
    companyWelfare?: true
    companyLocation?: true
    updatedDate?: true
  }

  export type Incumbents_additionalMaxAggregateInputType = {
    id?: true
    incumbentId?: true
    image?: true
    school?: true
    jobDescription?: true
    reportedNum?: true
    adviceCount?: true
    estimationCount?: true
    major?: true
    companyName?: true
    companyWelfare?: true
    companyLocation?: true
    updatedDate?: true
  }

  export type Incumbents_additionalCountAggregateInputType = {
    id?: true
    incumbentId?: true
    image?: true
    school?: true
    jobDescription?: true
    reportedNum?: true
    adviceCount?: true
    estimationCount?: true
    major?: true
    companyName?: true
    companyWelfare?: true
    companyLocation?: true
    updatedDate?: true
    _all?: true
  }

  export type Incumbents_additionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incumbents_additional to aggregate.
     */
    where?: incumbents_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents_additionals to fetch.
     */
    orderBy?: incumbents_additionalOrderByWithRelationInput | incumbents_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incumbents_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incumbents_additionals
    **/
    _count?: true | Incumbents_additionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Incumbents_additionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Incumbents_additionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Incumbents_additionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Incumbents_additionalMaxAggregateInputType
  }

  export type GetIncumbents_additionalAggregateType<T extends Incumbents_additionalAggregateArgs> = {
        [P in keyof T & keyof AggregateIncumbents_additional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncumbents_additional[P]>
      : GetScalarType<T[P], AggregateIncumbents_additional[P]>
  }




  export type incumbents_additionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incumbents_additionalWhereInput
    orderBy?: incumbents_additionalOrderByWithAggregationInput | incumbents_additionalOrderByWithAggregationInput[]
    by: Incumbents_additionalScalarFieldEnum[] | Incumbents_additionalScalarFieldEnum
    having?: incumbents_additionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Incumbents_additionalCountAggregateInputType | true
    _avg?: Incumbents_additionalAvgAggregateInputType
    _sum?: Incumbents_additionalSumAggregateInputType
    _min?: Incumbents_additionalMinAggregateInputType
    _max?: Incumbents_additionalMaxAggregateInputType
  }

  export type Incumbents_additionalGroupByOutputType = {
    id: number
    incumbentId: number
    image: string | null
    school: string | null
    jobDescription: string | null
    reportedNum: number
    adviceCount: number
    estimationCount: number
    major: string | null
    companyName: string | null
    companyWelfare: string
    companyLocation: string | null
    updatedDate: Date
    _count: Incumbents_additionalCountAggregateOutputType | null
    _avg: Incumbents_additionalAvgAggregateOutputType | null
    _sum: Incumbents_additionalSumAggregateOutputType | null
    _min: Incumbents_additionalMinAggregateOutputType | null
    _max: Incumbents_additionalMaxAggregateOutputType | null
  }

  type GetIncumbents_additionalGroupByPayload<T extends incumbents_additionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Incumbents_additionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Incumbents_additionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Incumbents_additionalGroupByOutputType[P]>
            : GetScalarType<T[P], Incumbents_additionalGroupByOutputType[P]>
        }
      >
    >


  export type incumbents_additionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incumbentId?: boolean
    image?: boolean
    school?: boolean
    jobDescription?: boolean
    reportedNum?: boolean
    adviceCount?: boolean
    estimationCount?: boolean
    major?: boolean
    companyName?: boolean
    companyWelfare?: boolean
    companyLocation?: boolean
    updatedDate?: boolean
    incumbents?: boolean | incumbentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incumbents_additional"]>

  export type incumbents_additionalSelectScalar = {
    id?: boolean
    incumbentId?: boolean
    image?: boolean
    school?: boolean
    jobDescription?: boolean
    reportedNum?: boolean
    adviceCount?: boolean
    estimationCount?: boolean
    major?: boolean
    companyName?: boolean
    companyWelfare?: boolean
    companyLocation?: boolean
    updatedDate?: boolean
  }

  export type incumbents_additionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incumbents?: boolean | incumbentsDefaultArgs<ExtArgs>
  }


  export type $incumbents_additionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "incumbents_additional"
    objects: {
      incumbents: Prisma.$incumbentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incumbentId: number
      image: string | null
      school: string | null
      jobDescription: string | null
      reportedNum: number
      adviceCount: number
      estimationCount: number
      major: string | null
      companyName: string | null
      companyWelfare: string
      companyLocation: string | null
      updatedDate: Date
    }, ExtArgs["result"]["incumbents_additional"]>
    composites: {}
  }


  type incumbents_additionalGetPayload<S extends boolean | null | undefined | incumbents_additionalDefaultArgs> = $Result.GetResult<Prisma.$incumbents_additionalPayload, S>

  type incumbents_additionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<incumbents_additionalFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Incumbents_additionalCountAggregateInputType | true
    }

  export interface incumbents_additionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incumbents_additional'], meta: { name: 'incumbents_additional' } }
    /**
     * Find zero or one Incumbents_additional that matches the filter.
     * @param {incumbents_additionalFindUniqueArgs} args - Arguments to find a Incumbents_additional
     * @example
     * // Get one Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends incumbents_additionalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalFindUniqueArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Incumbents_additional that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {incumbents_additionalFindUniqueOrThrowArgs} args - Arguments to find a Incumbents_additional
     * @example
     * // Get one Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends incumbents_additionalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Incumbents_additional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalFindFirstArgs} args - Arguments to find a Incumbents_additional
     * @example
     * // Get one Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends incumbents_additionalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalFindFirstArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Incumbents_additional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalFindFirstOrThrowArgs} args - Arguments to find a Incumbents_additional
     * @example
     * // Get one Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends incumbents_additionalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Incumbents_additionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incumbents_additionals
     * const incumbents_additionals = await prisma.incumbents_additional.findMany()
     * 
     * // Get first 10 Incumbents_additionals
     * const incumbents_additionals = await prisma.incumbents_additional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incumbents_additionalWithIdOnly = await prisma.incumbents_additional.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends incumbents_additionalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Incumbents_additional.
     * @param {incumbents_additionalCreateArgs} args - Arguments to create a Incumbents_additional.
     * @example
     * // Create one Incumbents_additional
     * const Incumbents_additional = await prisma.incumbents_additional.create({
     *   data: {
     *     // ... data to create a Incumbents_additional
     *   }
     * })
     * 
    **/
    create<T extends incumbents_additionalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalCreateArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Incumbents_additionals.
     *     @param {incumbents_additionalCreateManyArgs} args - Arguments to create many Incumbents_additionals.
     *     @example
     *     // Create many Incumbents_additionals
     *     const incumbents_additional = await prisma.incumbents_additional.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends incumbents_additionalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incumbents_additional.
     * @param {incumbents_additionalDeleteArgs} args - Arguments to delete one Incumbents_additional.
     * @example
     * // Delete one Incumbents_additional
     * const Incumbents_additional = await prisma.incumbents_additional.delete({
     *   where: {
     *     // ... filter to delete one Incumbents_additional
     *   }
     * })
     * 
    **/
    delete<T extends incumbents_additionalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalDeleteArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Incumbents_additional.
     * @param {incumbents_additionalUpdateArgs} args - Arguments to update one Incumbents_additional.
     * @example
     * // Update one Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends incumbents_additionalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalUpdateArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Incumbents_additionals.
     * @param {incumbents_additionalDeleteManyArgs} args - Arguments to filter Incumbents_additionals to delete.
     * @example
     * // Delete a few Incumbents_additionals
     * const { count } = await prisma.incumbents_additional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends incumbents_additionalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incumbents_additionalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incumbents_additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incumbents_additionals
     * const incumbents_additional = await prisma.incumbents_additional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends incumbents_additionalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incumbents_additional.
     * @param {incumbents_additionalUpsertArgs} args - Arguments to update or create a Incumbents_additional.
     * @example
     * // Update or create a Incumbents_additional
     * const incumbents_additional = await prisma.incumbents_additional.upsert({
     *   create: {
     *     // ... data to create a Incumbents_additional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incumbents_additional we want to update
     *   }
     * })
    **/
    upsert<T extends incumbents_additionalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, incumbents_additionalUpsertArgs<ExtArgs>>
    ): Prisma__incumbents_additionalClient<$Result.GetResult<Prisma.$incumbents_additionalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Incumbents_additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalCountArgs} args - Arguments to filter Incumbents_additionals to count.
     * @example
     * // Count the number of Incumbents_additionals
     * const count = await prisma.incumbents_additional.count({
     *   where: {
     *     // ... the filter for the Incumbents_additionals we want to count
     *   }
     * })
    **/
    count<T extends incumbents_additionalCountArgs>(
      args?: Subset<T, incumbents_additionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Incumbents_additionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incumbents_additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Incumbents_additionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Incumbents_additionalAggregateArgs>(args: Subset<T, Incumbents_additionalAggregateArgs>): Prisma.PrismaPromise<GetIncumbents_additionalAggregateType<T>>

    /**
     * Group by Incumbents_additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incumbents_additionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends incumbents_additionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incumbents_additionalGroupByArgs['orderBy'] }
        : { orderBy?: incumbents_additionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, incumbents_additionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncumbents_additionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the incumbents_additional model
   */
  readonly fields: incumbents_additionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incumbents_additional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incumbents_additionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incumbents<T extends incumbentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, incumbentsDefaultArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the incumbents_additional model
   */ 
  interface incumbents_additionalFieldRefs {
    readonly id: FieldRef<"incumbents_additional", 'Int'>
    readonly incumbentId: FieldRef<"incumbents_additional", 'Int'>
    readonly image: FieldRef<"incumbents_additional", 'String'>
    readonly school: FieldRef<"incumbents_additional", 'String'>
    readonly jobDescription: FieldRef<"incumbents_additional", 'String'>
    readonly reportedNum: FieldRef<"incumbents_additional", 'Int'>
    readonly adviceCount: FieldRef<"incumbents_additional", 'Int'>
    readonly estimationCount: FieldRef<"incumbents_additional", 'Float'>
    readonly major: FieldRef<"incumbents_additional", 'String'>
    readonly companyName: FieldRef<"incumbents_additional", 'String'>
    readonly companyWelfare: FieldRef<"incumbents_additional", 'String'>
    readonly companyLocation: FieldRef<"incumbents_additional", 'String'>
    readonly updatedDate: FieldRef<"incumbents_additional", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * incumbents_additional findUnique
   */
  export type incumbents_additionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter, which incumbents_additional to fetch.
     */
    where: incumbents_additionalWhereUniqueInput
  }


  /**
   * incumbents_additional findUniqueOrThrow
   */
  export type incumbents_additionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter, which incumbents_additional to fetch.
     */
    where: incumbents_additionalWhereUniqueInput
  }


  /**
   * incumbents_additional findFirst
   */
  export type incumbents_additionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter, which incumbents_additional to fetch.
     */
    where?: incumbents_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents_additionals to fetch.
     */
    orderBy?: incumbents_additionalOrderByWithRelationInput | incumbents_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incumbents_additionals.
     */
    cursor?: incumbents_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incumbents_additionals.
     */
    distinct?: Incumbents_additionalScalarFieldEnum | Incumbents_additionalScalarFieldEnum[]
  }


  /**
   * incumbents_additional findFirstOrThrow
   */
  export type incumbents_additionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter, which incumbents_additional to fetch.
     */
    where?: incumbents_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents_additionals to fetch.
     */
    orderBy?: incumbents_additionalOrderByWithRelationInput | incumbents_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incumbents_additionals.
     */
    cursor?: incumbents_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incumbents_additionals.
     */
    distinct?: Incumbents_additionalScalarFieldEnum | Incumbents_additionalScalarFieldEnum[]
  }


  /**
   * incumbents_additional findMany
   */
  export type incumbents_additionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter, which incumbents_additionals to fetch.
     */
    where?: incumbents_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incumbents_additionals to fetch.
     */
    orderBy?: incumbents_additionalOrderByWithRelationInput | incumbents_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incumbents_additionals.
     */
    cursor?: incumbents_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incumbents_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incumbents_additionals.
     */
    skip?: number
    distinct?: Incumbents_additionalScalarFieldEnum | Incumbents_additionalScalarFieldEnum[]
  }


  /**
   * incumbents_additional create
   */
  export type incumbents_additionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * The data needed to create a incumbents_additional.
     */
    data: XOR<incumbents_additionalCreateInput, incumbents_additionalUncheckedCreateInput>
  }


  /**
   * incumbents_additional createMany
   */
  export type incumbents_additionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incumbents_additionals.
     */
    data: incumbents_additionalCreateManyInput | incumbents_additionalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * incumbents_additional update
   */
  export type incumbents_additionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * The data needed to update a incumbents_additional.
     */
    data: XOR<incumbents_additionalUpdateInput, incumbents_additionalUncheckedUpdateInput>
    /**
     * Choose, which incumbents_additional to update.
     */
    where: incumbents_additionalWhereUniqueInput
  }


  /**
   * incumbents_additional updateMany
   */
  export type incumbents_additionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incumbents_additionals.
     */
    data: XOR<incumbents_additionalUpdateManyMutationInput, incumbents_additionalUncheckedUpdateManyInput>
    /**
     * Filter which incumbents_additionals to update
     */
    where?: incumbents_additionalWhereInput
  }


  /**
   * incumbents_additional upsert
   */
  export type incumbents_additionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * The filter to search for the incumbents_additional to update in case it exists.
     */
    where: incumbents_additionalWhereUniqueInput
    /**
     * In case the incumbents_additional found by the `where` argument doesn't exist, create a new incumbents_additional with this data.
     */
    create: XOR<incumbents_additionalCreateInput, incumbents_additionalUncheckedCreateInput>
    /**
     * In case the incumbents_additional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incumbents_additionalUpdateInput, incumbents_additionalUncheckedUpdateInput>
  }


  /**
   * incumbents_additional delete
   */
  export type incumbents_additionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
    /**
     * Filter which incumbents_additional to delete.
     */
    where: incumbents_additionalWhereUniqueInput
  }


  /**
   * incumbents_additional deleteMany
   */
  export type incumbents_additionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incumbents_additionals to delete
     */
    where?: incumbents_additionalWhereInput
  }


  /**
   * incumbents_additional without action
   */
  export type incumbents_additionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents_additional
     */
    select?: incumbents_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbents_additionalInclude<ExtArgs> | null
  }



  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type StudentsSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type StudentsMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    createdDate: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    createdDate: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    age: number
    gender: number
    createdDate: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type StudentsSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    createdDate?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate: Date
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    createdDate?: boolean
    student_additional?: boolean | students$student_additionalArgs<ExtArgs>
    posts?: boolean | students$postsArgs<ExtArgs>
    comments?: boolean | students$commentsArgs<ExtArgs>
    recommend_posts?: boolean | students$recommend_postsArgs<ExtArgs>
    recommend_comments?: boolean | students$recommend_commentsArgs<ExtArgs>
    reported_posts?: boolean | students$reported_postsArgs<ExtArgs>
    reported_comments?: boolean | students$reported_commentsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    createdDate?: boolean
  }

  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_additional?: boolean | students$student_additionalArgs<ExtArgs>
    posts?: boolean | students$postsArgs<ExtArgs>
    comments?: boolean | students$commentsArgs<ExtArgs>
    recommend_posts?: boolean | students$recommend_postsArgs<ExtArgs>
    recommend_comments?: boolean | students$recommend_commentsArgs<ExtArgs>
    reported_posts?: boolean | students$reported_postsArgs<ExtArgs>
    reported_comments?: boolean | students$reported_commentsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      student_additional: Prisma.$students_additionalPayload<ExtArgs> | null
      posts: Prisma.$postsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      recommend_posts: Prisma.$recommend_postsPayload<ExtArgs>[]
      recommend_comments: Prisma.$recommend_commentsPayload<ExtArgs>[]
      reported_posts: Prisma.$reported_postsPayload<ExtArgs>[]
      reported_comments: Prisma.$reported_commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      age: number
      gender: $Enums.Gender
      createdDate: Date
    }, ExtArgs["result"]["students"]>
    composites: {}
  }


  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Students that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends studentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
    **/
    create<T extends studentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentsCreateArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {studentsCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const students = await prisma.students.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends studentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
    **/
    delete<T extends studentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends studentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends studentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
    **/
    upsert<T extends studentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>
    ): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student_additional<T extends students$student_additionalArgs<ExtArgs> = {}>(args?: Subset<T, students$student_additionalArgs<ExtArgs>>): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends students$postsArgs<ExtArgs> = {}>(args?: Subset<T, students$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends students$commentsArgs<ExtArgs> = {}>(args?: Subset<T, students$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_posts<T extends students$recommend_postsArgs<ExtArgs> = {}>(args?: Subset<T, students$recommend_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_comments<T extends students$recommend_commentsArgs<ExtArgs> = {}>(args?: Subset<T, students$recommend_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_posts<T extends students$reported_postsArgs<ExtArgs> = {}>(args?: Subset<T, students$reported_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_comments<T extends students$reported_commentsArgs<ExtArgs> = {}>(args?: Subset<T, students$reported_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the students model
   */ 
  interface studentsFieldRefs {
    readonly id: FieldRef<"students", 'Int'>
    readonly email: FieldRef<"students", 'String'>
    readonly password: FieldRef<"students", 'String'>
    readonly name: FieldRef<"students", 'String'>
    readonly age: FieldRef<"students", 'Int'>
    readonly gender: FieldRef<"students", 'Gender'>
    readonly createdDate: FieldRef<"students", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }


  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }


  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
  }


  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }


  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }


  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
  }


  /**
   * students.student_additional
   */
  export type students$student_additionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    where?: students_additionalWhereInput
  }


  /**
   * students.posts
   */
  export type students$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * students.comments
   */
  export type students$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * students.recommend_posts
   */
  export type students$recommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    where?: recommend_postsWhereInput
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    cursor?: recommend_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * students.recommend_comments
   */
  export type students$recommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    where?: recommend_commentsWhereInput
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    cursor?: recommend_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * students.reported_posts
   */
  export type students$reported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    where?: reported_postsWhereInput
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    cursor?: reported_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * students.reported_comments
   */
  export type students$reported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    where?: reported_commentsWhereInput
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    cursor?: reported_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
  }



  /**
   * Model students_additional
   */

  export type AggregateStudents_additional = {
    _count: Students_additionalCountAggregateOutputType | null
    _avg: Students_additionalAvgAggregateOutputType | null
    _sum: Students_additionalSumAggregateOutputType | null
    _min: Students_additionalMinAggregateOutputType | null
    _max: Students_additionalMaxAggregateOutputType | null
  }

  export type Students_additionalAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    reportedNum: number | null
    totalGrade: number | null
    adviceCount: number | null
    estimationCount: number | null
  }

  export type Students_additionalSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    reportedNum: number | null
    totalGrade: number | null
    adviceCount: number | null
    estimationCount: number | null
  }

  export type Students_additionalMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    image: string | null
    major: string | null
    school: string | null
    reportedNum: number | null
    totalGrade: number | null
    adviceCount: number | null
    estimationCount: number | null
    wishJobDescription: string | null
    wishCompanyName: string | null
    wishCompanyWelfare: string | null
    wishCompanyLocation: string | null
    updatedDate: Date | null
  }

  export type Students_additionalMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    image: string | null
    major: string | null
    school: string | null
    reportedNum: number | null
    totalGrade: number | null
    adviceCount: number | null
    estimationCount: number | null
    wishJobDescription: string | null
    wishCompanyName: string | null
    wishCompanyWelfare: string | null
    wishCompanyLocation: string | null
    updatedDate: Date | null
  }

  export type Students_additionalCountAggregateOutputType = {
    id: number
    studentId: number
    image: number
    major: number
    school: number
    reportedNum: number
    totalGrade: number
    adviceCount: number
    estimationCount: number
    wishJobDescription: number
    wishCompanyName: number
    wishCompanyWelfare: number
    wishCompanyLocation: number
    updatedDate: number
    _all: number
  }


  export type Students_additionalAvgAggregateInputType = {
    id?: true
    studentId?: true
    reportedNum?: true
    totalGrade?: true
    adviceCount?: true
    estimationCount?: true
  }

  export type Students_additionalSumAggregateInputType = {
    id?: true
    studentId?: true
    reportedNum?: true
    totalGrade?: true
    adviceCount?: true
    estimationCount?: true
  }

  export type Students_additionalMinAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    major?: true
    school?: true
    reportedNum?: true
    totalGrade?: true
    adviceCount?: true
    estimationCount?: true
    wishJobDescription?: true
    wishCompanyName?: true
    wishCompanyWelfare?: true
    wishCompanyLocation?: true
    updatedDate?: true
  }

  export type Students_additionalMaxAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    major?: true
    school?: true
    reportedNum?: true
    totalGrade?: true
    adviceCount?: true
    estimationCount?: true
    wishJobDescription?: true
    wishCompanyName?: true
    wishCompanyWelfare?: true
    wishCompanyLocation?: true
    updatedDate?: true
  }

  export type Students_additionalCountAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    major?: true
    school?: true
    reportedNum?: true
    totalGrade?: true
    adviceCount?: true
    estimationCount?: true
    wishJobDescription?: true
    wishCompanyName?: true
    wishCompanyWelfare?: true
    wishCompanyLocation?: true
    updatedDate?: true
    _all?: true
  }

  export type Students_additionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students_additional to aggregate.
     */
    where?: students_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students_additionals to fetch.
     */
    orderBy?: students_additionalOrderByWithRelationInput | students_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: students_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students_additionals
    **/
    _count?: true | Students_additionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Students_additionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Students_additionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Students_additionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Students_additionalMaxAggregateInputType
  }

  export type GetStudents_additionalAggregateType<T extends Students_additionalAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents_additional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents_additional[P]>
      : GetScalarType<T[P], AggregateStudents_additional[P]>
  }




  export type students_additionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: students_additionalWhereInput
    orderBy?: students_additionalOrderByWithAggregationInput | students_additionalOrderByWithAggregationInput[]
    by: Students_additionalScalarFieldEnum[] | Students_additionalScalarFieldEnum
    having?: students_additionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Students_additionalCountAggregateInputType | true
    _avg?: Students_additionalAvgAggregateInputType
    _sum?: Students_additionalSumAggregateInputType
    _min?: Students_additionalMinAggregateInputType
    _max?: Students_additionalMaxAggregateInputType
  }

  export type Students_additionalGroupByOutputType = {
    id: number
    studentId: number
    image: string | null
    major: string | null
    school: string | null
    reportedNum: number
    totalGrade: number | null
    adviceCount: number
    estimationCount: number
    wishJobDescription: string | null
    wishCompanyName: string | null
    wishCompanyWelfare: string | null
    wishCompanyLocation: string | null
    updatedDate: Date
    _count: Students_additionalCountAggregateOutputType | null
    _avg: Students_additionalAvgAggregateOutputType | null
    _sum: Students_additionalSumAggregateOutputType | null
    _min: Students_additionalMinAggregateOutputType | null
    _max: Students_additionalMaxAggregateOutputType | null
  }

  type GetStudents_additionalGroupByPayload<T extends students_additionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Students_additionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Students_additionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Students_additionalGroupByOutputType[P]>
            : GetScalarType<T[P], Students_additionalGroupByOutputType[P]>
        }
      >
    >


  export type students_additionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    image?: boolean
    major?: boolean
    school?: boolean
    reportedNum?: boolean
    totalGrade?: boolean
    adviceCount?: boolean
    estimationCount?: boolean
    wishJobDescription?: boolean
    wishCompanyName?: boolean
    wishCompanyWelfare?: boolean
    wishCompanyLocation?: boolean
    updatedDate?: boolean
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students_additional"]>

  export type students_additionalSelectScalar = {
    id?: boolean
    studentId?: boolean
    image?: boolean
    major?: boolean
    school?: boolean
    reportedNum?: boolean
    totalGrade?: boolean
    adviceCount?: boolean
    estimationCount?: boolean
    wishJobDescription?: boolean
    wishCompanyName?: boolean
    wishCompanyWelfare?: boolean
    wishCompanyLocation?: boolean
    updatedDate?: boolean
  }

  export type students_additionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | studentsDefaultArgs<ExtArgs>
  }


  export type $students_additionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students_additional"
    objects: {
      students: Prisma.$studentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      image: string | null
      major: string | null
      school: string | null
      reportedNum: number
      totalGrade: number | null
      adviceCount: number
      estimationCount: number
      wishJobDescription: string | null
      wishCompanyName: string | null
      wishCompanyWelfare: string | null
      wishCompanyLocation: string | null
      updatedDate: Date
    }, ExtArgs["result"]["students_additional"]>
    composites: {}
  }


  type students_additionalGetPayload<S extends boolean | null | undefined | students_additionalDefaultArgs> = $Result.GetResult<Prisma.$students_additionalPayload, S>

  type students_additionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<students_additionalFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Students_additionalCountAggregateInputType | true
    }

  export interface students_additionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students_additional'], meta: { name: 'students_additional' } }
    /**
     * Find zero or one Students_additional that matches the filter.
     * @param {students_additionalFindUniqueArgs} args - Arguments to find a Students_additional
     * @example
     * // Get one Students_additional
     * const students_additional = await prisma.students_additional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends students_additionalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalFindUniqueArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Students_additional that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {students_additionalFindUniqueOrThrowArgs} args - Arguments to find a Students_additional
     * @example
     * // Get one Students_additional
     * const students_additional = await prisma.students_additional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends students_additionalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Students_additional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalFindFirstArgs} args - Arguments to find a Students_additional
     * @example
     * // Get one Students_additional
     * const students_additional = await prisma.students_additional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends students_additionalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalFindFirstArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Students_additional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalFindFirstOrThrowArgs} args - Arguments to find a Students_additional
     * @example
     * // Get one Students_additional
     * const students_additional = await prisma.students_additional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends students_additionalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students_additionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students_additionals
     * const students_additionals = await prisma.students_additional.findMany()
     * 
     * // Get first 10 Students_additionals
     * const students_additionals = await prisma.students_additional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const students_additionalWithIdOnly = await prisma.students_additional.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends students_additionalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Students_additional.
     * @param {students_additionalCreateArgs} args - Arguments to create a Students_additional.
     * @example
     * // Create one Students_additional
     * const Students_additional = await prisma.students_additional.create({
     *   data: {
     *     // ... data to create a Students_additional
     *   }
     * })
     * 
    **/
    create<T extends students_additionalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalCreateArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students_additionals.
     *     @param {students_additionalCreateManyArgs} args - Arguments to create many Students_additionals.
     *     @example
     *     // Create many Students_additionals
     *     const students_additional = await prisma.students_additional.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends students_additionalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students_additional.
     * @param {students_additionalDeleteArgs} args - Arguments to delete one Students_additional.
     * @example
     * // Delete one Students_additional
     * const Students_additional = await prisma.students_additional.delete({
     *   where: {
     *     // ... filter to delete one Students_additional
     *   }
     * })
     * 
    **/
    delete<T extends students_additionalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalDeleteArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Students_additional.
     * @param {students_additionalUpdateArgs} args - Arguments to update one Students_additional.
     * @example
     * // Update one Students_additional
     * const students_additional = await prisma.students_additional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends students_additionalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalUpdateArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students_additionals.
     * @param {students_additionalDeleteManyArgs} args - Arguments to filter Students_additionals to delete.
     * @example
     * // Delete a few Students_additionals
     * const { count } = await prisma.students_additional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends students_additionalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, students_additionalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students_additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students_additionals
     * const students_additional = await prisma.students_additional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends students_additionalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students_additional.
     * @param {students_additionalUpsertArgs} args - Arguments to update or create a Students_additional.
     * @example
     * // Update or create a Students_additional
     * const students_additional = await prisma.students_additional.upsert({
     *   create: {
     *     // ... data to create a Students_additional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students_additional we want to update
     *   }
     * })
    **/
    upsert<T extends students_additionalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, students_additionalUpsertArgs<ExtArgs>>
    ): Prisma__students_additionalClient<$Result.GetResult<Prisma.$students_additionalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students_additionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalCountArgs} args - Arguments to filter Students_additionals to count.
     * @example
     * // Count the number of Students_additionals
     * const count = await prisma.students_additional.count({
     *   where: {
     *     // ... the filter for the Students_additionals we want to count
     *   }
     * })
    **/
    count<T extends students_additionalCountArgs>(
      args?: Subset<T, students_additionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Students_additionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students_additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Students_additionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Students_additionalAggregateArgs>(args: Subset<T, Students_additionalAggregateArgs>): Prisma.PrismaPromise<GetStudents_additionalAggregateType<T>>

    /**
     * Group by Students_additional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {students_additionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends students_additionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: students_additionalGroupByArgs['orderBy'] }
        : { orderBy?: students_additionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, students_additionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudents_additionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students_additional model
   */
  readonly fields: students_additionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students_additional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__students_additionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the students_additional model
   */ 
  interface students_additionalFieldRefs {
    readonly id: FieldRef<"students_additional", 'Int'>
    readonly studentId: FieldRef<"students_additional", 'Int'>
    readonly image: FieldRef<"students_additional", 'String'>
    readonly major: FieldRef<"students_additional", 'String'>
    readonly school: FieldRef<"students_additional", 'String'>
    readonly reportedNum: FieldRef<"students_additional", 'Int'>
    readonly totalGrade: FieldRef<"students_additional", 'Float'>
    readonly adviceCount: FieldRef<"students_additional", 'Int'>
    readonly estimationCount: FieldRef<"students_additional", 'Float'>
    readonly wishJobDescription: FieldRef<"students_additional", 'String'>
    readonly wishCompanyName: FieldRef<"students_additional", 'String'>
    readonly wishCompanyWelfare: FieldRef<"students_additional", 'String'>
    readonly wishCompanyLocation: FieldRef<"students_additional", 'String'>
    readonly updatedDate: FieldRef<"students_additional", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * students_additional findUnique
   */
  export type students_additionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter, which students_additional to fetch.
     */
    where: students_additionalWhereUniqueInput
  }


  /**
   * students_additional findUniqueOrThrow
   */
  export type students_additionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter, which students_additional to fetch.
     */
    where: students_additionalWhereUniqueInput
  }


  /**
   * students_additional findFirst
   */
  export type students_additionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter, which students_additional to fetch.
     */
    where?: students_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students_additionals to fetch.
     */
    orderBy?: students_additionalOrderByWithRelationInput | students_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students_additionals.
     */
    cursor?: students_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students_additionals.
     */
    distinct?: Students_additionalScalarFieldEnum | Students_additionalScalarFieldEnum[]
  }


  /**
   * students_additional findFirstOrThrow
   */
  export type students_additionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter, which students_additional to fetch.
     */
    where?: students_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students_additionals to fetch.
     */
    orderBy?: students_additionalOrderByWithRelationInput | students_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students_additionals.
     */
    cursor?: students_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students_additionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students_additionals.
     */
    distinct?: Students_additionalScalarFieldEnum | Students_additionalScalarFieldEnum[]
  }


  /**
   * students_additional findMany
   */
  export type students_additionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter, which students_additionals to fetch.
     */
    where?: students_additionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students_additionals to fetch.
     */
    orderBy?: students_additionalOrderByWithRelationInput | students_additionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students_additionals.
     */
    cursor?: students_additionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students_additionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students_additionals.
     */
    skip?: number
    distinct?: Students_additionalScalarFieldEnum | Students_additionalScalarFieldEnum[]
  }


  /**
   * students_additional create
   */
  export type students_additionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * The data needed to create a students_additional.
     */
    data: XOR<students_additionalCreateInput, students_additionalUncheckedCreateInput>
  }


  /**
   * students_additional createMany
   */
  export type students_additionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students_additionals.
     */
    data: students_additionalCreateManyInput | students_additionalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * students_additional update
   */
  export type students_additionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * The data needed to update a students_additional.
     */
    data: XOR<students_additionalUpdateInput, students_additionalUncheckedUpdateInput>
    /**
     * Choose, which students_additional to update.
     */
    where: students_additionalWhereUniqueInput
  }


  /**
   * students_additional updateMany
   */
  export type students_additionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students_additionals.
     */
    data: XOR<students_additionalUpdateManyMutationInput, students_additionalUncheckedUpdateManyInput>
    /**
     * Filter which students_additionals to update
     */
    where?: students_additionalWhereInput
  }


  /**
   * students_additional upsert
   */
  export type students_additionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * The filter to search for the students_additional to update in case it exists.
     */
    where: students_additionalWhereUniqueInput
    /**
     * In case the students_additional found by the `where` argument doesn't exist, create a new students_additional with this data.
     */
    create: XOR<students_additionalCreateInput, students_additionalUncheckedCreateInput>
    /**
     * In case the students_additional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<students_additionalUpdateInput, students_additionalUncheckedUpdateInput>
  }


  /**
   * students_additional delete
   */
  export type students_additionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
    /**
     * Filter which students_additional to delete.
     */
    where: students_additionalWhereUniqueInput
  }


  /**
   * students_additional deleteMany
   */
  export type students_additionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students_additionals to delete
     */
    where?: students_additionalWhereInput
  }


  /**
   * students_additional without action
   */
  export type students_additionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students_additional
     */
    select?: students_additionalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: students_additionalInclude<ExtArgs> | null
  }



  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    posts?: boolean | category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends category$postsArgs<ExtArgs> = {}>(args?: Subset<T, category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.posts
   */
  export type category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
  }



  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    studentId: number | null
    categoryId: number | null
    view: number | null
    recommend: number | null
    reported: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    studentId: number | null
    categoryId: number | null
    view: number | null
    recommend: number | null
    reported: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    studentId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    view: number | null
    recommend: number | null
    reported: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    incumbentId: number | null
    studentId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    view: number | null
    recommend: number | null
    reported: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    incumbentId: number
    studentId: number
    categoryId: number
    title: number
    content: number
    view: number
    recommend: number
    reported: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    incumbentId?: true
    studentId?: true
    categoryId?: true
    view?: true
    recommend?: true
    reported?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    incumbentId?: true
    studentId?: true
    categoryId?: true
    view?: true
    recommend?: true
    reported?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    incumbentId?: true
    studentId?: true
    categoryId?: true
    title?: true
    content?: true
    view?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    incumbentId?: true
    studentId?: true
    categoryId?: true
    title?: true
    content?: true
    view?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    incumbentId?: true
    studentId?: true
    categoryId?: true
    title?: true
    content?: true
    view?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    incumbentId: number | null
    studentId: number | null
    categoryId: number | null
    title: string
    content: string
    view: number
    recommend: number
    reported: number
    createdDate: Date
    updatedDate: Date
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incumbentId?: boolean
    studentId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    view?: boolean
    recommend?: boolean
    reported?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    categories?: boolean | posts$categoriesArgs<ExtArgs>
    incumbents?: boolean | posts$incumbentsArgs<ExtArgs>
    students?: boolean | posts$studentsArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    recommend_posts?: boolean | posts$recommend_postsArgs<ExtArgs>
    reported_posts?: boolean | posts$reported_postsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    incumbentId?: boolean
    studentId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    view?: boolean
    recommend?: boolean
    reported?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | posts$categoriesArgs<ExtArgs>
    incumbents?: boolean | posts$incumbentsArgs<ExtArgs>
    students?: boolean | posts$studentsArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    recommend_posts?: boolean | posts$recommend_postsArgs<ExtArgs>
    reported_posts?: boolean | posts$reported_postsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      categories: Prisma.$categoryPayload<ExtArgs> | null
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
      comments: Prisma.$commentsPayload<ExtArgs>[]
      recommend_posts: Prisma.$recommend_postsPayload<ExtArgs>[]
      reported_posts: Prisma.$reported_postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incumbentId: number | null
      studentId: number | null
      categoryId: number | null
      title: string
      content: string
      view: number
      recommend: number
      reported: number
      createdDate: Date
      updatedDate: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }


  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends postsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postsCreateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {postsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends postsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postsDeleteArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends postsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpsertArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categories<T extends posts$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, posts$categoriesArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    incumbents<T extends posts$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends posts$studentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_posts<T extends posts$recommend_postsArgs<ExtArgs> = {}>(args?: Subset<T, posts$recommend_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_posts<T extends posts$reported_postsArgs<ExtArgs> = {}>(args?: Subset<T, posts$reported_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the posts model
   */ 
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly incumbentId: FieldRef<"posts", 'Int'>
    readonly studentId: FieldRef<"posts", 'Int'>
    readonly categoryId: FieldRef<"posts", 'Int'>
    readonly title: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly view: FieldRef<"posts", 'Int'>
    readonly recommend: FieldRef<"posts", 'Int'>
    readonly reported: FieldRef<"posts", 'Int'>
    readonly createdDate: FieldRef<"posts", 'DateTime'>
    readonly updatedDate: FieldRef<"posts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }


  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
  }


  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }


  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
  }


  /**
   * posts.categories
   */
  export type posts$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }


  /**
   * posts.incumbents
   */
  export type posts$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * posts.students
   */
  export type posts$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * posts.recommend_posts
   */
  export type posts$recommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    where?: recommend_postsWhereInput
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    cursor?: recommend_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * posts.reported_posts
   */
  export type posts$reported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    where?: reported_postsWhereInput
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    cursor?: reported_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
  }



  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    parentCommentId: number | null
    recommend: number | null
    reported: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    parentCommentId: number | null
    recommend: number | null
    reported: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    content: string | null
    parentCommentId: number | null
    recommend: number | null
    reported: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    content: string | null
    parentCommentId: number | null
    recommend: number | null
    reported: number | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    postId: number
    incumbentId: number
    studentId: number
    content: number
    parentCommentId: number
    recommend: number
    reported: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    parentCommentId?: true
    recommend?: true
    reported?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    parentCommentId?: true
    recommend?: true
    reported?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    content?: true
    parentCommentId?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    content?: true
    parentCommentId?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    content?: true
    parentCommentId?: true
    recommend?: true
    reported?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    postId: number
    incumbentId: number | null
    studentId: number | null
    content: string
    parentCommentId: number | null
    recommend: number
    reported: number
    createdDate: Date
    updatedDate: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    content?: boolean
    parentCommentId?: boolean
    recommend?: boolean
    reported?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    incumbents?: boolean | comments$incumbentsArgs<ExtArgs>
    students?: boolean | comments$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
    parent?: boolean | comments$parentArgs<ExtArgs>
    replies?: boolean | comments$repliesArgs<ExtArgs>
    recommend_comments?: boolean | comments$recommend_commentsArgs<ExtArgs>
    reported_comments?: boolean | comments$reported_commentsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    content?: boolean
    parentCommentId?: boolean
    recommend?: boolean
    reported?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incumbents?: boolean | comments$incumbentsArgs<ExtArgs>
    students?: boolean | comments$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
    parent?: boolean | comments$parentArgs<ExtArgs>
    replies?: boolean | comments$repliesArgs<ExtArgs>
    recommend_comments?: boolean | comments$recommend_commentsArgs<ExtArgs>
    reported_comments?: boolean | comments$reported_commentsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
      post: Prisma.$postsPayload<ExtArgs>
      parent: Prisma.$commentsPayload<ExtArgs> | null
      replies: Prisma.$commentsPayload<ExtArgs>[]
      recommend_comments: Prisma.$recommend_commentsPayload<ExtArgs>[]
      reported_comments: Prisma.$reported_commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      incumbentId: number | null
      studentId: number | null
      content: string
      parentCommentId: number | null
      recommend: number
      reported: number
      createdDate: Date
      updatedDate: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }


  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends commentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, commentsCreateArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends commentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends commentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>
    ): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incumbents<T extends comments$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends comments$studentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parent<T extends comments$parentArgs<ExtArgs> = {}>(args?: Subset<T, comments$parentArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    replies<T extends comments$repliesArgs<ExtArgs> = {}>(args?: Subset<T, comments$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    recommend_comments<T extends comments$recommend_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$recommend_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reported_comments<T extends comments$reported_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$reported_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly postId: FieldRef<"comments", 'Int'>
    readonly incumbentId: FieldRef<"comments", 'Int'>
    readonly studentId: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly parentCommentId: FieldRef<"comments", 'Int'>
    readonly recommend: FieldRef<"comments", 'Int'>
    readonly reported: FieldRef<"comments", 'Int'>
    readonly createdDate: FieldRef<"comments", 'DateTime'>
    readonly updatedDate: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }


  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }


  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }


  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }


  /**
   * comments.incumbents
   */
  export type comments$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * comments.students
   */
  export type comments$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * comments.parent
   */
  export type comments$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }


  /**
   * comments.replies
   */
  export type comments$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }


  /**
   * comments.recommend_comments
   */
  export type comments$recommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    where?: recommend_commentsWhereInput
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    cursor?: recommend_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * comments.reported_comments
   */
  export type comments$reported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    where?: reported_commentsWhereInput
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    cursor?: reported_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude<ExtArgs> | null
  }



  /**
   * Model recommend_posts
   */

  export type AggregateRecommend_posts = {
    _count: Recommend_postsCountAggregateOutputType | null
    _avg: Recommend_postsAvgAggregateOutputType | null
    _sum: Recommend_postsSumAggregateOutputType | null
    _min: Recommend_postsMinAggregateOutputType | null
    _max: Recommend_postsMaxAggregateOutputType | null
  }

  export type Recommend_postsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Recommend_postsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Recommend_postsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    createdDate: Date | null
  }

  export type Recommend_postsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    createdDate: Date | null
  }

  export type Recommend_postsCountAggregateOutputType = {
    id: number
    postId: number
    incumbentId: number
    studentId: number
    createdDate: number
    _all: number
  }


  export type Recommend_postsAvgAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Recommend_postsSumAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Recommend_postsMinAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
  }

  export type Recommend_postsMaxAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
  }

  export type Recommend_postsCountAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
    _all?: true
  }

  export type Recommend_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_posts to aggregate.
     */
    where?: recommend_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_posts to fetch.
     */
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recommend_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recommend_posts
    **/
    _count?: true | Recommend_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recommend_postsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recommend_postsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recommend_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recommend_postsMaxAggregateInputType
  }

  export type GetRecommend_postsAggregateType<T extends Recommend_postsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommend_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommend_posts[P]>
      : GetScalarType<T[P], AggregateRecommend_posts[P]>
  }




  export type recommend_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_postsWhereInput
    orderBy?: recommend_postsOrderByWithAggregationInput | recommend_postsOrderByWithAggregationInput[]
    by: Recommend_postsScalarFieldEnum[] | Recommend_postsScalarFieldEnum
    having?: recommend_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recommend_postsCountAggregateInputType | true
    _avg?: Recommend_postsAvgAggregateInputType
    _sum?: Recommend_postsSumAggregateInputType
    _min?: Recommend_postsMinAggregateInputType
    _max?: Recommend_postsMaxAggregateInputType
  }

  export type Recommend_postsGroupByOutputType = {
    id: number
    postId: number
    incumbentId: number | null
    studentId: number | null
    createdDate: Date
    _count: Recommend_postsCountAggregateOutputType | null
    _avg: Recommend_postsAvgAggregateOutputType | null
    _sum: Recommend_postsSumAggregateOutputType | null
    _min: Recommend_postsMinAggregateOutputType | null
    _max: Recommend_postsMaxAggregateOutputType | null
  }

  type GetRecommend_postsGroupByPayload<T extends recommend_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recommend_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recommend_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recommend_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Recommend_postsGroupByOutputType[P]>
        }
      >
    >


  export type recommend_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    createdDate?: boolean
    incumbents?: boolean | recommend_posts$incumbentsArgs<ExtArgs>
    students?: boolean | recommend_posts$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommend_posts"]>

  export type recommend_postsSelectScalar = {
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    createdDate?: boolean
  }

  export type recommend_postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incumbents?: boolean | recommend_posts$incumbentsArgs<ExtArgs>
    students?: boolean | recommend_posts$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }


  export type $recommend_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recommend_posts"
    objects: {
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      incumbentId: number | null
      studentId: number | null
      createdDate: Date
    }, ExtArgs["result"]["recommend_posts"]>
    composites: {}
  }


  type recommend_postsGetPayload<S extends boolean | null | undefined | recommend_postsDefaultArgs> = $Result.GetResult<Prisma.$recommend_postsPayload, S>

  type recommend_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recommend_postsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Recommend_postsCountAggregateInputType | true
    }

  export interface recommend_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recommend_posts'], meta: { name: 'recommend_posts' } }
    /**
     * Find zero or one Recommend_posts that matches the filter.
     * @param {recommend_postsFindUniqueArgs} args - Arguments to find a Recommend_posts
     * @example
     * // Get one Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends recommend_postsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsFindUniqueArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recommend_posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {recommend_postsFindUniqueOrThrowArgs} args - Arguments to find a Recommend_posts
     * @example
     * // Get one Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends recommend_postsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recommend_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsFindFirstArgs} args - Arguments to find a Recommend_posts
     * @example
     * // Get one Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends recommend_postsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsFindFirstArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recommend_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsFindFirstOrThrowArgs} args - Arguments to find a Recommend_posts
     * @example
     * // Get one Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends recommend_postsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recommend_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findMany()
     * 
     * // Get first 10 Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommend_postsWithIdOnly = await prisma.recommend_posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends recommend_postsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recommend_posts.
     * @param {recommend_postsCreateArgs} args - Arguments to create a Recommend_posts.
     * @example
     * // Create one Recommend_posts
     * const Recommend_posts = await prisma.recommend_posts.create({
     *   data: {
     *     // ... data to create a Recommend_posts
     *   }
     * })
     * 
    **/
    create<T extends recommend_postsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsCreateArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recommend_posts.
     *     @param {recommend_postsCreateManyArgs} args - Arguments to create many Recommend_posts.
     *     @example
     *     // Create many Recommend_posts
     *     const recommend_posts = await prisma.recommend_posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends recommend_postsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recommend_posts.
     * @param {recommend_postsDeleteArgs} args - Arguments to delete one Recommend_posts.
     * @example
     * // Delete one Recommend_posts
     * const Recommend_posts = await prisma.recommend_posts.delete({
     *   where: {
     *     // ... filter to delete one Recommend_posts
     *   }
     * })
     * 
    **/
    delete<T extends recommend_postsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsDeleteArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recommend_posts.
     * @param {recommend_postsUpdateArgs} args - Arguments to update one Recommend_posts.
     * @example
     * // Update one Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends recommend_postsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsUpdateArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recommend_posts.
     * @param {recommend_postsDeleteManyArgs} args - Arguments to filter Recommend_posts to delete.
     * @example
     * // Delete a few Recommend_posts
     * const { count } = await prisma.recommend_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends recommend_postsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_postsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommend_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends recommend_postsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommend_posts.
     * @param {recommend_postsUpsertArgs} args - Arguments to update or create a Recommend_posts.
     * @example
     * // Update or create a Recommend_posts
     * const recommend_posts = await prisma.recommend_posts.upsert({
     *   create: {
     *     // ... data to create a Recommend_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommend_posts we want to update
     *   }
     * })
    **/
    upsert<T extends recommend_postsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_postsUpsertArgs<ExtArgs>>
    ): Prisma__recommend_postsClient<$Result.GetResult<Prisma.$recommend_postsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recommend_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsCountArgs} args - Arguments to filter Recommend_posts to count.
     * @example
     * // Count the number of Recommend_posts
     * const count = await prisma.recommend_posts.count({
     *   where: {
     *     // ... the filter for the Recommend_posts we want to count
     *   }
     * })
    **/
    count<T extends recommend_postsCountArgs>(
      args?: Subset<T, recommend_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recommend_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommend_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recommend_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recommend_postsAggregateArgs>(args: Subset<T, Recommend_postsAggregateArgs>): Prisma.PrismaPromise<GetRecommend_postsAggregateType<T>>

    /**
     * Group by Recommend_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recommend_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recommend_postsGroupByArgs['orderBy'] }
        : { orderBy?: recommend_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recommend_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommend_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recommend_posts model
   */
  readonly fields: recommend_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recommend_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recommend_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incumbents<T extends recommend_posts$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, recommend_posts$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends recommend_posts$studentsArgs<ExtArgs> = {}>(args?: Subset<T, recommend_posts$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the recommend_posts model
   */ 
  interface recommend_postsFieldRefs {
    readonly id: FieldRef<"recommend_posts", 'Int'>
    readonly postId: FieldRef<"recommend_posts", 'Int'>
    readonly incumbentId: FieldRef<"recommend_posts", 'Int'>
    readonly studentId: FieldRef<"recommend_posts", 'Int'>
    readonly createdDate: FieldRef<"recommend_posts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * recommend_posts findUnique
   */
  export type recommend_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_posts to fetch.
     */
    where: recommend_postsWhereUniqueInput
  }


  /**
   * recommend_posts findUniqueOrThrow
   */
  export type recommend_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_posts to fetch.
     */
    where: recommend_postsWhereUniqueInput
  }


  /**
   * recommend_posts findFirst
   */
  export type recommend_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_posts to fetch.
     */
    where?: recommend_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_posts to fetch.
     */
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_posts.
     */
    cursor?: recommend_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_posts.
     */
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * recommend_posts findFirstOrThrow
   */
  export type recommend_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_posts to fetch.
     */
    where?: recommend_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_posts to fetch.
     */
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_posts.
     */
    cursor?: recommend_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_posts.
     */
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * recommend_posts findMany
   */
  export type recommend_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_posts to fetch.
     */
    where?: recommend_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_posts to fetch.
     */
    orderBy?: recommend_postsOrderByWithRelationInput | recommend_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recommend_posts.
     */
    cursor?: recommend_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_posts.
     */
    skip?: number
    distinct?: Recommend_postsScalarFieldEnum | Recommend_postsScalarFieldEnum[]
  }


  /**
   * recommend_posts create
   */
  export type recommend_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * The data needed to create a recommend_posts.
     */
    data: XOR<recommend_postsCreateInput, recommend_postsUncheckedCreateInput>
  }


  /**
   * recommend_posts createMany
   */
  export type recommend_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recommend_posts.
     */
    data: recommend_postsCreateManyInput | recommend_postsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * recommend_posts update
   */
  export type recommend_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * The data needed to update a recommend_posts.
     */
    data: XOR<recommend_postsUpdateInput, recommend_postsUncheckedUpdateInput>
    /**
     * Choose, which recommend_posts to update.
     */
    where: recommend_postsWhereUniqueInput
  }


  /**
   * recommend_posts updateMany
   */
  export type recommend_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recommend_posts.
     */
    data: XOR<recommend_postsUpdateManyMutationInput, recommend_postsUncheckedUpdateManyInput>
    /**
     * Filter which recommend_posts to update
     */
    where?: recommend_postsWhereInput
  }


  /**
   * recommend_posts upsert
   */
  export type recommend_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * The filter to search for the recommend_posts to update in case it exists.
     */
    where: recommend_postsWhereUniqueInput
    /**
     * In case the recommend_posts found by the `where` argument doesn't exist, create a new recommend_posts with this data.
     */
    create: XOR<recommend_postsCreateInput, recommend_postsUncheckedCreateInput>
    /**
     * In case the recommend_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recommend_postsUpdateInput, recommend_postsUncheckedUpdateInput>
  }


  /**
   * recommend_posts delete
   */
  export type recommend_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
    /**
     * Filter which recommend_posts to delete.
     */
    where: recommend_postsWhereUniqueInput
  }


  /**
   * recommend_posts deleteMany
   */
  export type recommend_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_posts to delete
     */
    where?: recommend_postsWhereInput
  }


  /**
   * recommend_posts.incumbents
   */
  export type recommend_posts$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * recommend_posts.students
   */
  export type recommend_posts$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * recommend_posts without action
   */
  export type recommend_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_posts
     */
    select?: recommend_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_postsInclude<ExtArgs> | null
  }



  /**
   * Model reported_posts
   */

  export type AggregateReported_posts = {
    _count: Reported_postsCountAggregateOutputType | null
    _avg: Reported_postsAvgAggregateOutputType | null
    _sum: Reported_postsSumAggregateOutputType | null
    _min: Reported_postsMinAggregateOutputType | null
    _max: Reported_postsMaxAggregateOutputType | null
  }

  export type Reported_postsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Reported_postsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Reported_postsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    reason: string | null
    createdDate: Date | null
  }

  export type Reported_postsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    incumbentId: number | null
    studentId: number | null
    reason: string | null
    createdDate: Date | null
  }

  export type Reported_postsCountAggregateOutputType = {
    id: number
    postId: number
    incumbentId: number
    studentId: number
    reason: number
    createdDate: number
    _all: number
  }


  export type Reported_postsAvgAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Reported_postsSumAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Reported_postsMinAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
  }

  export type Reported_postsMaxAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
  }

  export type Reported_postsCountAggregateInputType = {
    id?: true
    postId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
    _all?: true
  }

  export type Reported_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_posts to aggregate.
     */
    where?: reported_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_posts to fetch.
     */
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reported_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reported_posts
    **/
    _count?: true | Reported_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reported_postsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reported_postsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reported_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reported_postsMaxAggregateInputType
  }

  export type GetReported_postsAggregateType<T extends Reported_postsAggregateArgs> = {
        [P in keyof T & keyof AggregateReported_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReported_posts[P]>
      : GetScalarType<T[P], AggregateReported_posts[P]>
  }




  export type reported_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_postsWhereInput
    orderBy?: reported_postsOrderByWithAggregationInput | reported_postsOrderByWithAggregationInput[]
    by: Reported_postsScalarFieldEnum[] | Reported_postsScalarFieldEnum
    having?: reported_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reported_postsCountAggregateInputType | true
    _avg?: Reported_postsAvgAggregateInputType
    _sum?: Reported_postsSumAggregateInputType
    _min?: Reported_postsMinAggregateInputType
    _max?: Reported_postsMaxAggregateInputType
  }

  export type Reported_postsGroupByOutputType = {
    id: number
    postId: number
    incumbentId: number | null
    studentId: number | null
    reason: string
    createdDate: Date
    _count: Reported_postsCountAggregateOutputType | null
    _avg: Reported_postsAvgAggregateOutputType | null
    _sum: Reported_postsSumAggregateOutputType | null
    _min: Reported_postsMinAggregateOutputType | null
    _max: Reported_postsMaxAggregateOutputType | null
  }

  type GetReported_postsGroupByPayload<T extends reported_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reported_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reported_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reported_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Reported_postsGroupByOutputType[P]>
        }
      >
    >


  export type reported_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    reason?: boolean
    createdDate?: boolean
    incumbents?: boolean | reported_posts$incumbentsArgs<ExtArgs>
    students?: boolean | reported_posts$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reported_posts"]>

  export type reported_postsSelectScalar = {
    id?: boolean
    postId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    reason?: boolean
    createdDate?: boolean
  }

  export type reported_postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incumbents?: boolean | reported_posts$incumbentsArgs<ExtArgs>
    students?: boolean | reported_posts$studentsArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }


  export type $reported_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reported_posts"
    objects: {
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      incumbentId: number | null
      studentId: number | null
      reason: string
      createdDate: Date
    }, ExtArgs["result"]["reported_posts"]>
    composites: {}
  }


  type reported_postsGetPayload<S extends boolean | null | undefined | reported_postsDefaultArgs> = $Result.GetResult<Prisma.$reported_postsPayload, S>

  type reported_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reported_postsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Reported_postsCountAggregateInputType | true
    }

  export interface reported_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reported_posts'], meta: { name: 'reported_posts' } }
    /**
     * Find zero or one Reported_posts that matches the filter.
     * @param {reported_postsFindUniqueArgs} args - Arguments to find a Reported_posts
     * @example
     * // Get one Reported_posts
     * const reported_posts = await prisma.reported_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reported_postsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsFindUniqueArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reported_posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reported_postsFindUniqueOrThrowArgs} args - Arguments to find a Reported_posts
     * @example
     * // Get one Reported_posts
     * const reported_posts = await prisma.reported_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reported_postsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reported_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsFindFirstArgs} args - Arguments to find a Reported_posts
     * @example
     * // Get one Reported_posts
     * const reported_posts = await prisma.reported_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reported_postsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsFindFirstArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reported_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsFindFirstOrThrowArgs} args - Arguments to find a Reported_posts
     * @example
     * // Get one Reported_posts
     * const reported_posts = await prisma.reported_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reported_postsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reported_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reported_posts
     * const reported_posts = await prisma.reported_posts.findMany()
     * 
     * // Get first 10 Reported_posts
     * const reported_posts = await prisma.reported_posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reported_postsWithIdOnly = await prisma.reported_posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends reported_postsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reported_posts.
     * @param {reported_postsCreateArgs} args - Arguments to create a Reported_posts.
     * @example
     * // Create one Reported_posts
     * const Reported_posts = await prisma.reported_posts.create({
     *   data: {
     *     // ... data to create a Reported_posts
     *   }
     * })
     * 
    **/
    create<T extends reported_postsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsCreateArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reported_posts.
     *     @param {reported_postsCreateManyArgs} args - Arguments to create many Reported_posts.
     *     @example
     *     // Create many Reported_posts
     *     const reported_posts = await prisma.reported_posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reported_postsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reported_posts.
     * @param {reported_postsDeleteArgs} args - Arguments to delete one Reported_posts.
     * @example
     * // Delete one Reported_posts
     * const Reported_posts = await prisma.reported_posts.delete({
     *   where: {
     *     // ... filter to delete one Reported_posts
     *   }
     * })
     * 
    **/
    delete<T extends reported_postsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsDeleteArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reported_posts.
     * @param {reported_postsUpdateArgs} args - Arguments to update one Reported_posts.
     * @example
     * // Update one Reported_posts
     * const reported_posts = await prisma.reported_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reported_postsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsUpdateArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reported_posts.
     * @param {reported_postsDeleteManyArgs} args - Arguments to filter Reported_posts to delete.
     * @example
     * // Delete a few Reported_posts
     * const { count } = await prisma.reported_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reported_postsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_postsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reported_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reported_posts
     * const reported_posts = await prisma.reported_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reported_postsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reported_posts.
     * @param {reported_postsUpsertArgs} args - Arguments to update or create a Reported_posts.
     * @example
     * // Update or create a Reported_posts
     * const reported_posts = await prisma.reported_posts.upsert({
     *   create: {
     *     // ... data to create a Reported_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reported_posts we want to update
     *   }
     * })
    **/
    upsert<T extends reported_postsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reported_postsUpsertArgs<ExtArgs>>
    ): Prisma__reported_postsClient<$Result.GetResult<Prisma.$reported_postsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reported_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsCountArgs} args - Arguments to filter Reported_posts to count.
     * @example
     * // Count the number of Reported_posts
     * const count = await prisma.reported_posts.count({
     *   where: {
     *     // ... the filter for the Reported_posts we want to count
     *   }
     * })
    **/
    count<T extends reported_postsCountArgs>(
      args?: Subset<T, reported_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reported_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reported_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reported_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reported_postsAggregateArgs>(args: Subset<T, Reported_postsAggregateArgs>): Prisma.PrismaPromise<GetReported_postsAggregateType<T>>

    /**
     * Group by Reported_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reported_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reported_postsGroupByArgs['orderBy'] }
        : { orderBy?: reported_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reported_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReported_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reported_posts model
   */
  readonly fields: reported_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reported_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reported_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incumbents<T extends reported_posts$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, reported_posts$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends reported_posts$studentsArgs<ExtArgs> = {}>(args?: Subset<T, reported_posts$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reported_posts model
   */ 
  interface reported_postsFieldRefs {
    readonly id: FieldRef<"reported_posts", 'Int'>
    readonly postId: FieldRef<"reported_posts", 'Int'>
    readonly incumbentId: FieldRef<"reported_posts", 'Int'>
    readonly studentId: FieldRef<"reported_posts", 'Int'>
    readonly reason: FieldRef<"reported_posts", 'String'>
    readonly createdDate: FieldRef<"reported_posts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * reported_posts findUnique
   */
  export type reported_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter, which reported_posts to fetch.
     */
    where: reported_postsWhereUniqueInput
  }


  /**
   * reported_posts findUniqueOrThrow
   */
  export type reported_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter, which reported_posts to fetch.
     */
    where: reported_postsWhereUniqueInput
  }


  /**
   * reported_posts findFirst
   */
  export type reported_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter, which reported_posts to fetch.
     */
    where?: reported_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_posts to fetch.
     */
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_posts.
     */
    cursor?: reported_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_posts.
     */
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * reported_posts findFirstOrThrow
   */
  export type reported_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter, which reported_posts to fetch.
     */
    where?: reported_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_posts to fetch.
     */
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_posts.
     */
    cursor?: reported_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_posts.
     */
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * reported_posts findMany
   */
  export type reported_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter, which reported_posts to fetch.
     */
    where?: reported_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_posts to fetch.
     */
    orderBy?: reported_postsOrderByWithRelationInput | reported_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reported_posts.
     */
    cursor?: reported_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_posts.
     */
    skip?: number
    distinct?: Reported_postsScalarFieldEnum | Reported_postsScalarFieldEnum[]
  }


  /**
   * reported_posts create
   */
  export type reported_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * The data needed to create a reported_posts.
     */
    data: XOR<reported_postsCreateInput, reported_postsUncheckedCreateInput>
  }


  /**
   * reported_posts createMany
   */
  export type reported_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reported_posts.
     */
    data: reported_postsCreateManyInput | reported_postsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reported_posts update
   */
  export type reported_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * The data needed to update a reported_posts.
     */
    data: XOR<reported_postsUpdateInput, reported_postsUncheckedUpdateInput>
    /**
     * Choose, which reported_posts to update.
     */
    where: reported_postsWhereUniqueInput
  }


  /**
   * reported_posts updateMany
   */
  export type reported_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reported_posts.
     */
    data: XOR<reported_postsUpdateManyMutationInput, reported_postsUncheckedUpdateManyInput>
    /**
     * Filter which reported_posts to update
     */
    where?: reported_postsWhereInput
  }


  /**
   * reported_posts upsert
   */
  export type reported_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * The filter to search for the reported_posts to update in case it exists.
     */
    where: reported_postsWhereUniqueInput
    /**
     * In case the reported_posts found by the `where` argument doesn't exist, create a new reported_posts with this data.
     */
    create: XOR<reported_postsCreateInput, reported_postsUncheckedCreateInput>
    /**
     * In case the reported_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reported_postsUpdateInput, reported_postsUncheckedUpdateInput>
  }


  /**
   * reported_posts delete
   */
  export type reported_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
    /**
     * Filter which reported_posts to delete.
     */
    where: reported_postsWhereUniqueInput
  }


  /**
   * reported_posts deleteMany
   */
  export type reported_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_posts to delete
     */
    where?: reported_postsWhereInput
  }


  /**
   * reported_posts.incumbents
   */
  export type reported_posts$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * reported_posts.students
   */
  export type reported_posts$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * reported_posts without action
   */
  export type reported_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_posts
     */
    select?: reported_postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_postsInclude<ExtArgs> | null
  }



  /**
   * Model recommend_comments
   */

  export type AggregateRecommend_comments = {
    _count: Recommend_commentsCountAggregateOutputType | null
    _avg: Recommend_commentsAvgAggregateOutputType | null
    _sum: Recommend_commentsSumAggregateOutputType | null
    _min: Recommend_commentsMinAggregateOutputType | null
    _max: Recommend_commentsMaxAggregateOutputType | null
  }

  export type Recommend_commentsAvgAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Recommend_commentsSumAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Recommend_commentsMinAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
    createdDate: Date | null
  }

  export type Recommend_commentsMaxAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
    createdDate: Date | null
  }

  export type Recommend_commentsCountAggregateOutputType = {
    id: number
    commendId: number
    incumbentId: number
    studentId: number
    createdDate: number
    _all: number
  }


  export type Recommend_commentsAvgAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Recommend_commentsSumAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Recommend_commentsMinAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
  }

  export type Recommend_commentsMaxAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
  }

  export type Recommend_commentsCountAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    createdDate?: true
    _all?: true
  }

  export type Recommend_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_comments to aggregate.
     */
    where?: recommend_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_comments to fetch.
     */
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recommend_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recommend_comments
    **/
    _count?: true | Recommend_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recommend_commentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recommend_commentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recommend_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recommend_commentsMaxAggregateInputType
  }

  export type GetRecommend_commentsAggregateType<T extends Recommend_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommend_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommend_comments[P]>
      : GetScalarType<T[P], AggregateRecommend_comments[P]>
  }




  export type recommend_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recommend_commentsWhereInput
    orderBy?: recommend_commentsOrderByWithAggregationInput | recommend_commentsOrderByWithAggregationInput[]
    by: Recommend_commentsScalarFieldEnum[] | Recommend_commentsScalarFieldEnum
    having?: recommend_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recommend_commentsCountAggregateInputType | true
    _avg?: Recommend_commentsAvgAggregateInputType
    _sum?: Recommend_commentsSumAggregateInputType
    _min?: Recommend_commentsMinAggregateInputType
    _max?: Recommend_commentsMaxAggregateInputType
  }

  export type Recommend_commentsGroupByOutputType = {
    id: number
    commendId: number
    incumbentId: number | null
    studentId: number | null
    createdDate: Date
    _count: Recommend_commentsCountAggregateOutputType | null
    _avg: Recommend_commentsAvgAggregateOutputType | null
    _sum: Recommend_commentsSumAggregateOutputType | null
    _min: Recommend_commentsMinAggregateOutputType | null
    _max: Recommend_commentsMaxAggregateOutputType | null
  }

  type GetRecommend_commentsGroupByPayload<T extends recommend_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recommend_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recommend_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recommend_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Recommend_commentsGroupByOutputType[P]>
        }
      >
    >


  export type recommend_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commendId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    createdDate?: boolean
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    incumbents?: boolean | recommend_comments$incumbentsArgs<ExtArgs>
    students?: boolean | recommend_comments$studentsArgs<ExtArgs>
  }, ExtArgs["result"]["recommend_comments"]>

  export type recommend_commentsSelectScalar = {
    id?: boolean
    commendId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    createdDate?: boolean
  }

  export type recommend_commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    incumbents?: boolean | recommend_comments$incumbentsArgs<ExtArgs>
    students?: boolean | recommend_comments$studentsArgs<ExtArgs>
  }


  export type $recommend_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recommend_comments"
    objects: {
      comment: Prisma.$commentsPayload<ExtArgs>
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commendId: number
      incumbentId: number | null
      studentId: number | null
      createdDate: Date
    }, ExtArgs["result"]["recommend_comments"]>
    composites: {}
  }


  type recommend_commentsGetPayload<S extends boolean | null | undefined | recommend_commentsDefaultArgs> = $Result.GetResult<Prisma.$recommend_commentsPayload, S>

  type recommend_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recommend_commentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Recommend_commentsCountAggregateInputType | true
    }

  export interface recommend_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recommend_comments'], meta: { name: 'recommend_comments' } }
    /**
     * Find zero or one Recommend_comments that matches the filter.
     * @param {recommend_commentsFindUniqueArgs} args - Arguments to find a Recommend_comments
     * @example
     * // Get one Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends recommend_commentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsFindUniqueArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recommend_comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {recommend_commentsFindUniqueOrThrowArgs} args - Arguments to find a Recommend_comments
     * @example
     * // Get one Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends recommend_commentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recommend_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsFindFirstArgs} args - Arguments to find a Recommend_comments
     * @example
     * // Get one Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends recommend_commentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsFindFirstArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recommend_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsFindFirstOrThrowArgs} args - Arguments to find a Recommend_comments
     * @example
     * // Get one Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends recommend_commentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recommend_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findMany()
     * 
     * // Get first 10 Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommend_commentsWithIdOnly = await prisma.recommend_comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends recommend_commentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recommend_comments.
     * @param {recommend_commentsCreateArgs} args - Arguments to create a Recommend_comments.
     * @example
     * // Create one Recommend_comments
     * const Recommend_comments = await prisma.recommend_comments.create({
     *   data: {
     *     // ... data to create a Recommend_comments
     *   }
     * })
     * 
    **/
    create<T extends recommend_commentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsCreateArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recommend_comments.
     *     @param {recommend_commentsCreateManyArgs} args - Arguments to create many Recommend_comments.
     *     @example
     *     // Create many Recommend_comments
     *     const recommend_comments = await prisma.recommend_comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends recommend_commentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recommend_comments.
     * @param {recommend_commentsDeleteArgs} args - Arguments to delete one Recommend_comments.
     * @example
     * // Delete one Recommend_comments
     * const Recommend_comments = await prisma.recommend_comments.delete({
     *   where: {
     *     // ... filter to delete one Recommend_comments
     *   }
     * })
     * 
    **/
    delete<T extends recommend_commentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsDeleteArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recommend_comments.
     * @param {recommend_commentsUpdateArgs} args - Arguments to update one Recommend_comments.
     * @example
     * // Update one Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends recommend_commentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsUpdateArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recommend_comments.
     * @param {recommend_commentsDeleteManyArgs} args - Arguments to filter Recommend_comments to delete.
     * @example
     * // Delete a few Recommend_comments
     * const { count } = await prisma.recommend_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends recommend_commentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recommend_commentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommend_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends recommend_commentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommend_comments.
     * @param {recommend_commentsUpsertArgs} args - Arguments to update or create a Recommend_comments.
     * @example
     * // Update or create a Recommend_comments
     * const recommend_comments = await prisma.recommend_comments.upsert({
     *   create: {
     *     // ... data to create a Recommend_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommend_comments we want to update
     *   }
     * })
    **/
    upsert<T extends recommend_commentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, recommend_commentsUpsertArgs<ExtArgs>>
    ): Prisma__recommend_commentsClient<$Result.GetResult<Prisma.$recommend_commentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recommend_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsCountArgs} args - Arguments to filter Recommend_comments to count.
     * @example
     * // Count the number of Recommend_comments
     * const count = await prisma.recommend_comments.count({
     *   where: {
     *     // ... the filter for the Recommend_comments we want to count
     *   }
     * })
    **/
    count<T extends recommend_commentsCountArgs>(
      args?: Subset<T, recommend_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recommend_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommend_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recommend_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recommend_commentsAggregateArgs>(args: Subset<T, Recommend_commentsAggregateArgs>): Prisma.PrismaPromise<GetRecommend_commentsAggregateType<T>>

    /**
     * Group by Recommend_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recommend_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recommend_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recommend_commentsGroupByArgs['orderBy'] }
        : { orderBy?: recommend_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recommend_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommend_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recommend_comments model
   */
  readonly fields: recommend_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recommend_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recommend_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comment<T extends commentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commentsDefaultArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    incumbents<T extends recommend_comments$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, recommend_comments$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends recommend_comments$studentsArgs<ExtArgs> = {}>(args?: Subset<T, recommend_comments$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the recommend_comments model
   */ 
  interface recommend_commentsFieldRefs {
    readonly id: FieldRef<"recommend_comments", 'Int'>
    readonly commendId: FieldRef<"recommend_comments", 'Int'>
    readonly incumbentId: FieldRef<"recommend_comments", 'Int'>
    readonly studentId: FieldRef<"recommend_comments", 'Int'>
    readonly createdDate: FieldRef<"recommend_comments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * recommend_comments findUnique
   */
  export type recommend_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_comments to fetch.
     */
    where: recommend_commentsWhereUniqueInput
  }


  /**
   * recommend_comments findUniqueOrThrow
   */
  export type recommend_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_comments to fetch.
     */
    where: recommend_commentsWhereUniqueInput
  }


  /**
   * recommend_comments findFirst
   */
  export type recommend_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_comments to fetch.
     */
    where?: recommend_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_comments to fetch.
     */
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_comments.
     */
    cursor?: recommend_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_comments.
     */
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * recommend_comments findFirstOrThrow
   */
  export type recommend_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_comments to fetch.
     */
    where?: recommend_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_comments to fetch.
     */
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recommend_comments.
     */
    cursor?: recommend_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recommend_comments.
     */
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * recommend_comments findMany
   */
  export type recommend_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter, which recommend_comments to fetch.
     */
    where?: recommend_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recommend_comments to fetch.
     */
    orderBy?: recommend_commentsOrderByWithRelationInput | recommend_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recommend_comments.
     */
    cursor?: recommend_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recommend_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recommend_comments.
     */
    skip?: number
    distinct?: Recommend_commentsScalarFieldEnum | Recommend_commentsScalarFieldEnum[]
  }


  /**
   * recommend_comments create
   */
  export type recommend_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a recommend_comments.
     */
    data: XOR<recommend_commentsCreateInput, recommend_commentsUncheckedCreateInput>
  }


  /**
   * recommend_comments createMany
   */
  export type recommend_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recommend_comments.
     */
    data: recommend_commentsCreateManyInput | recommend_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * recommend_comments update
   */
  export type recommend_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a recommend_comments.
     */
    data: XOR<recommend_commentsUpdateInput, recommend_commentsUncheckedUpdateInput>
    /**
     * Choose, which recommend_comments to update.
     */
    where: recommend_commentsWhereUniqueInput
  }


  /**
   * recommend_comments updateMany
   */
  export type recommend_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recommend_comments.
     */
    data: XOR<recommend_commentsUpdateManyMutationInput, recommend_commentsUncheckedUpdateManyInput>
    /**
     * Filter which recommend_comments to update
     */
    where?: recommend_commentsWhereInput
  }


  /**
   * recommend_comments upsert
   */
  export type recommend_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the recommend_comments to update in case it exists.
     */
    where: recommend_commentsWhereUniqueInput
    /**
     * In case the recommend_comments found by the `where` argument doesn't exist, create a new recommend_comments with this data.
     */
    create: XOR<recommend_commentsCreateInput, recommend_commentsUncheckedCreateInput>
    /**
     * In case the recommend_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recommend_commentsUpdateInput, recommend_commentsUncheckedUpdateInput>
  }


  /**
   * recommend_comments delete
   */
  export type recommend_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
    /**
     * Filter which recommend_comments to delete.
     */
    where: recommend_commentsWhereUniqueInput
  }


  /**
   * recommend_comments deleteMany
   */
  export type recommend_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recommend_comments to delete
     */
    where?: recommend_commentsWhereInput
  }


  /**
   * recommend_comments.incumbents
   */
  export type recommend_comments$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * recommend_comments.students
   */
  export type recommend_comments$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * recommend_comments without action
   */
  export type recommend_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recommend_comments
     */
    select?: recommend_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recommend_commentsInclude<ExtArgs> | null
  }



  /**
   * Model reported_comments
   */

  export type AggregateReported_comments = {
    _count: Reported_commentsCountAggregateOutputType | null
    _avg: Reported_commentsAvgAggregateOutputType | null
    _sum: Reported_commentsSumAggregateOutputType | null
    _min: Reported_commentsMinAggregateOutputType | null
    _max: Reported_commentsMaxAggregateOutputType | null
  }

  export type Reported_commentsAvgAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Reported_commentsSumAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
  }

  export type Reported_commentsMinAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
    reason: string | null
    createdDate: Date | null
  }

  export type Reported_commentsMaxAggregateOutputType = {
    id: number | null
    commendId: number | null
    incumbentId: number | null
    studentId: number | null
    reason: string | null
    createdDate: Date | null
  }

  export type Reported_commentsCountAggregateOutputType = {
    id: number
    commendId: number
    incumbentId: number
    studentId: number
    reason: number
    createdDate: number
    _all: number
  }


  export type Reported_commentsAvgAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Reported_commentsSumAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
  }

  export type Reported_commentsMinAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
  }

  export type Reported_commentsMaxAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
  }

  export type Reported_commentsCountAggregateInputType = {
    id?: true
    commendId?: true
    incumbentId?: true
    studentId?: true
    reason?: true
    createdDate?: true
    _all?: true
  }

  export type Reported_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_comments to aggregate.
     */
    where?: reported_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_comments to fetch.
     */
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reported_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reported_comments
    **/
    _count?: true | Reported_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reported_commentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reported_commentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reported_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reported_commentsMaxAggregateInputType
  }

  export type GetReported_commentsAggregateType<T extends Reported_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateReported_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReported_comments[P]>
      : GetScalarType<T[P], AggregateReported_comments[P]>
  }




  export type reported_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_commentsWhereInput
    orderBy?: reported_commentsOrderByWithAggregationInput | reported_commentsOrderByWithAggregationInput[]
    by: Reported_commentsScalarFieldEnum[] | Reported_commentsScalarFieldEnum
    having?: reported_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reported_commentsCountAggregateInputType | true
    _avg?: Reported_commentsAvgAggregateInputType
    _sum?: Reported_commentsSumAggregateInputType
    _min?: Reported_commentsMinAggregateInputType
    _max?: Reported_commentsMaxAggregateInputType
  }

  export type Reported_commentsGroupByOutputType = {
    id: number
    commendId: number
    incumbentId: number | null
    studentId: number | null
    reason: string
    createdDate: Date
    _count: Reported_commentsCountAggregateOutputType | null
    _avg: Reported_commentsAvgAggregateOutputType | null
    _sum: Reported_commentsSumAggregateOutputType | null
    _min: Reported_commentsMinAggregateOutputType | null
    _max: Reported_commentsMaxAggregateOutputType | null
  }

  type GetReported_commentsGroupByPayload<T extends reported_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reported_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reported_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reported_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Reported_commentsGroupByOutputType[P]>
        }
      >
    >


  export type reported_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commendId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    reason?: boolean
    createdDate?: boolean
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    incumbents?: boolean | reported_comments$incumbentsArgs<ExtArgs>
    students?: boolean | reported_comments$studentsArgs<ExtArgs>
  }, ExtArgs["result"]["reported_comments"]>

  export type reported_commentsSelectScalar = {
    id?: boolean
    commendId?: boolean
    incumbentId?: boolean
    studentId?: boolean
    reason?: boolean
    createdDate?: boolean
  }

  export type reported_commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    incumbents?: boolean | reported_comments$incumbentsArgs<ExtArgs>
    students?: boolean | reported_comments$studentsArgs<ExtArgs>
  }


  export type $reported_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reported_comments"
    objects: {
      comment: Prisma.$commentsPayload<ExtArgs>
      incumbents: Prisma.$incumbentsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commendId: number
      incumbentId: number | null
      studentId: number | null
      reason: string
      createdDate: Date
    }, ExtArgs["result"]["reported_comments"]>
    composites: {}
  }


  type reported_commentsGetPayload<S extends boolean | null | undefined | reported_commentsDefaultArgs> = $Result.GetResult<Prisma.$reported_commentsPayload, S>

  type reported_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reported_commentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Reported_commentsCountAggregateInputType | true
    }

  export interface reported_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reported_comments'], meta: { name: 'reported_comments' } }
    /**
     * Find zero or one Reported_comments that matches the filter.
     * @param {reported_commentsFindUniqueArgs} args - Arguments to find a Reported_comments
     * @example
     * // Get one Reported_comments
     * const reported_comments = await prisma.reported_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reported_commentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsFindUniqueArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reported_comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reported_commentsFindUniqueOrThrowArgs} args - Arguments to find a Reported_comments
     * @example
     * // Get one Reported_comments
     * const reported_comments = await prisma.reported_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reported_commentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reported_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsFindFirstArgs} args - Arguments to find a Reported_comments
     * @example
     * // Get one Reported_comments
     * const reported_comments = await prisma.reported_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reported_commentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsFindFirstArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reported_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsFindFirstOrThrowArgs} args - Arguments to find a Reported_comments
     * @example
     * // Get one Reported_comments
     * const reported_comments = await prisma.reported_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reported_commentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reported_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reported_comments
     * const reported_comments = await prisma.reported_comments.findMany()
     * 
     * // Get first 10 Reported_comments
     * const reported_comments = await prisma.reported_comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reported_commentsWithIdOnly = await prisma.reported_comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends reported_commentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reported_comments.
     * @param {reported_commentsCreateArgs} args - Arguments to create a Reported_comments.
     * @example
     * // Create one Reported_comments
     * const Reported_comments = await prisma.reported_comments.create({
     *   data: {
     *     // ... data to create a Reported_comments
     *   }
     * })
     * 
    **/
    create<T extends reported_commentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsCreateArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reported_comments.
     *     @param {reported_commentsCreateManyArgs} args - Arguments to create many Reported_comments.
     *     @example
     *     // Create many Reported_comments
     *     const reported_comments = await prisma.reported_comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reported_commentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reported_comments.
     * @param {reported_commentsDeleteArgs} args - Arguments to delete one Reported_comments.
     * @example
     * // Delete one Reported_comments
     * const Reported_comments = await prisma.reported_comments.delete({
     *   where: {
     *     // ... filter to delete one Reported_comments
     *   }
     * })
     * 
    **/
    delete<T extends reported_commentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsDeleteArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reported_comments.
     * @param {reported_commentsUpdateArgs} args - Arguments to update one Reported_comments.
     * @example
     * // Update one Reported_comments
     * const reported_comments = await prisma.reported_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reported_commentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsUpdateArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reported_comments.
     * @param {reported_commentsDeleteManyArgs} args - Arguments to filter Reported_comments to delete.
     * @example
     * // Delete a few Reported_comments
     * const { count } = await prisma.reported_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reported_commentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reported_commentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reported_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reported_comments
     * const reported_comments = await prisma.reported_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reported_commentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reported_comments.
     * @param {reported_commentsUpsertArgs} args - Arguments to update or create a Reported_comments.
     * @example
     * // Update or create a Reported_comments
     * const reported_comments = await prisma.reported_comments.upsert({
     *   create: {
     *     // ... data to create a Reported_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reported_comments we want to update
     *   }
     * })
    **/
    upsert<T extends reported_commentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reported_commentsUpsertArgs<ExtArgs>>
    ): Prisma__reported_commentsClient<$Result.GetResult<Prisma.$reported_commentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reported_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsCountArgs} args - Arguments to filter Reported_comments to count.
     * @example
     * // Count the number of Reported_comments
     * const count = await prisma.reported_comments.count({
     *   where: {
     *     // ... the filter for the Reported_comments we want to count
     *   }
     * })
    **/
    count<T extends reported_commentsCountArgs>(
      args?: Subset<T, reported_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reported_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reported_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reported_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reported_commentsAggregateArgs>(args: Subset<T, Reported_commentsAggregateArgs>): Prisma.PrismaPromise<GetReported_commentsAggregateType<T>>

    /**
     * Group by Reported_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reported_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reported_commentsGroupByArgs['orderBy'] }
        : { orderBy?: reported_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reported_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReported_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reported_comments model
   */
  readonly fields: reported_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reported_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reported_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comment<T extends commentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commentsDefaultArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    incumbents<T extends reported_comments$incumbentsArgs<ExtArgs> = {}>(args?: Subset<T, reported_comments$incumbentsArgs<ExtArgs>>): Prisma__incumbentsClient<$Result.GetResult<Prisma.$incumbentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    students<T extends reported_comments$studentsArgs<ExtArgs> = {}>(args?: Subset<T, reported_comments$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reported_comments model
   */ 
  interface reported_commentsFieldRefs {
    readonly id: FieldRef<"reported_comments", 'Int'>
    readonly commendId: FieldRef<"reported_comments", 'Int'>
    readonly incumbentId: FieldRef<"reported_comments", 'Int'>
    readonly studentId: FieldRef<"reported_comments", 'Int'>
    readonly reason: FieldRef<"reported_comments", 'String'>
    readonly createdDate: FieldRef<"reported_comments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * reported_comments findUnique
   */
  export type reported_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter, which reported_comments to fetch.
     */
    where: reported_commentsWhereUniqueInput
  }


  /**
   * reported_comments findUniqueOrThrow
   */
  export type reported_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter, which reported_comments to fetch.
     */
    where: reported_commentsWhereUniqueInput
  }


  /**
   * reported_comments findFirst
   */
  export type reported_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter, which reported_comments to fetch.
     */
    where?: reported_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_comments to fetch.
     */
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_comments.
     */
    cursor?: reported_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_comments.
     */
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * reported_comments findFirstOrThrow
   */
  export type reported_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter, which reported_comments to fetch.
     */
    where?: reported_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_comments to fetch.
     */
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_comments.
     */
    cursor?: reported_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_comments.
     */
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * reported_comments findMany
   */
  export type reported_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter, which reported_comments to fetch.
     */
    where?: reported_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_comments to fetch.
     */
    orderBy?: reported_commentsOrderByWithRelationInput | reported_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reported_comments.
     */
    cursor?: reported_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_comments.
     */
    skip?: number
    distinct?: Reported_commentsScalarFieldEnum | Reported_commentsScalarFieldEnum[]
  }


  /**
   * reported_comments create
   */
  export type reported_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a reported_comments.
     */
    data: XOR<reported_commentsCreateInput, reported_commentsUncheckedCreateInput>
  }


  /**
   * reported_comments createMany
   */
  export type reported_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reported_comments.
     */
    data: reported_commentsCreateManyInput | reported_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reported_comments update
   */
  export type reported_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a reported_comments.
     */
    data: XOR<reported_commentsUpdateInput, reported_commentsUncheckedUpdateInput>
    /**
     * Choose, which reported_comments to update.
     */
    where: reported_commentsWhereUniqueInput
  }


  /**
   * reported_comments updateMany
   */
  export type reported_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reported_comments.
     */
    data: XOR<reported_commentsUpdateManyMutationInput, reported_commentsUncheckedUpdateManyInput>
    /**
     * Filter which reported_comments to update
     */
    where?: reported_commentsWhereInput
  }


  /**
   * reported_comments upsert
   */
  export type reported_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the reported_comments to update in case it exists.
     */
    where: reported_commentsWhereUniqueInput
    /**
     * In case the reported_comments found by the `where` argument doesn't exist, create a new reported_comments with this data.
     */
    create: XOR<reported_commentsCreateInput, reported_commentsUncheckedCreateInput>
    /**
     * In case the reported_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reported_commentsUpdateInput, reported_commentsUncheckedUpdateInput>
  }


  /**
   * reported_comments delete
   */
  export type reported_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
    /**
     * Filter which reported_comments to delete.
     */
    where: reported_commentsWhereUniqueInput
  }


  /**
   * reported_comments deleteMany
   */
  export type reported_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_comments to delete
     */
    where?: reported_commentsWhereInput
  }


  /**
   * reported_comments.incumbents
   */
  export type reported_comments$incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incumbents
     */
    select?: incumbentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incumbentsInclude<ExtArgs> | null
    where?: incumbentsWhereInput
  }


  /**
   * reported_comments.students
   */
  export type reported_comments$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }


  /**
   * reported_comments without action
   */
  export type reported_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_comments
     */
    select?: reported_commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reported_commentsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IncumbentsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    age: 'age',
    gender: 'gender',
    createdDate: 'createdDate'
  };

  export type IncumbentsScalarFieldEnum = (typeof IncumbentsScalarFieldEnum)[keyof typeof IncumbentsScalarFieldEnum]


  export const Incumbents_additionalScalarFieldEnum: {
    id: 'id',
    incumbentId: 'incumbentId',
    image: 'image',
    school: 'school',
    jobDescription: 'jobDescription',
    reportedNum: 'reportedNum',
    adviceCount: 'adviceCount',
    estimationCount: 'estimationCount',
    major: 'major',
    companyName: 'companyName',
    companyWelfare: 'companyWelfare',
    companyLocation: 'companyLocation',
    updatedDate: 'updatedDate'
  };

  export type Incumbents_additionalScalarFieldEnum = (typeof Incumbents_additionalScalarFieldEnum)[keyof typeof Incumbents_additionalScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    age: 'age',
    gender: 'gender',
    createdDate: 'createdDate'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const Students_additionalScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    image: 'image',
    major: 'major',
    school: 'school',
    reportedNum: 'reportedNum',
    totalGrade: 'totalGrade',
    adviceCount: 'adviceCount',
    estimationCount: 'estimationCount',
    wishJobDescription: 'wishJobDescription',
    wishCompanyName: 'wishCompanyName',
    wishCompanyWelfare: 'wishCompanyWelfare',
    wishCompanyLocation: 'wishCompanyLocation',
    updatedDate: 'updatedDate'
  };

  export type Students_additionalScalarFieldEnum = (typeof Students_additionalScalarFieldEnum)[keyof typeof Students_additionalScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    categoryId: 'categoryId',
    title: 'title',
    content: 'content',
    view: 'view',
    recommend: 'recommend',
    reported: 'reported',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    content: 'content',
    parentCommentId: 'parentCommentId',
    recommend: 'recommend',
    reported: 'reported',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Recommend_postsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    createdDate: 'createdDate'
  };

  export type Recommend_postsScalarFieldEnum = (typeof Recommend_postsScalarFieldEnum)[keyof typeof Recommend_postsScalarFieldEnum]


  export const Reported_postsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    reason: 'reason',
    createdDate: 'createdDate'
  };

  export type Reported_postsScalarFieldEnum = (typeof Reported_postsScalarFieldEnum)[keyof typeof Reported_postsScalarFieldEnum]


  export const Recommend_commentsScalarFieldEnum: {
    id: 'id',
    commendId: 'commendId',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    createdDate: 'createdDate'
  };

  export type Recommend_commentsScalarFieldEnum = (typeof Recommend_commentsScalarFieldEnum)[keyof typeof Recommend_commentsScalarFieldEnum]


  export const Reported_commentsScalarFieldEnum: {
    id: 'id',
    commendId: 'commendId',
    incumbentId: 'incumbentId',
    studentId: 'studentId',
    reason: 'reason',
    createdDate: 'createdDate'
  };

  export type Reported_commentsScalarFieldEnum = (typeof Reported_commentsScalarFieldEnum)[keyof typeof Reported_commentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type incumbentsWhereInput = {
    AND?: incumbentsWhereInput | incumbentsWhereInput[]
    OR?: incumbentsWhereInput[]
    NOT?: incumbentsWhereInput | incumbentsWhereInput[]
    id?: IntFilter<"incumbents"> | number
    email?: StringFilter<"incumbents"> | string
    password?: StringFilter<"incumbents"> | string
    name?: StringFilter<"incumbents"> | string
    age?: IntFilter<"incumbents"> | number
    gender?: EnumGenderFilter<"incumbents"> | $Enums.Gender
    createdDate?: DateTimeFilter<"incumbents"> | Date | string
    incumbent_additional?: XOR<Incumbents_additionalNullableRelationFilter, incumbents_additionalWhereInput> | null
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }

  export type incumbentsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
    incumbent_additional?: incumbents_additionalOrderByWithRelationInput
    posts?: postsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    recommend_posts?: recommend_postsOrderByRelationAggregateInput
    recommend_comments?: recommend_commentsOrderByRelationAggregateInput
    reported_posts?: reported_postsOrderByRelationAggregateInput
    reported_comments?: reported_commentsOrderByRelationAggregateInput
  }

  export type incumbentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: incumbentsWhereInput | incumbentsWhereInput[]
    OR?: incumbentsWhereInput[]
    NOT?: incumbentsWhereInput | incumbentsWhereInput[]
    password?: StringFilter<"incumbents"> | string
    name?: StringFilter<"incumbents"> | string
    age?: IntFilter<"incumbents"> | number
    gender?: EnumGenderFilter<"incumbents"> | $Enums.Gender
    createdDate?: DateTimeFilter<"incumbents"> | Date | string
    incumbent_additional?: XOR<Incumbents_additionalNullableRelationFilter, incumbents_additionalWhereInput> | null
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }, "id" | "email">

  export type incumbentsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
    _count?: incumbentsCountOrderByAggregateInput
    _avg?: incumbentsAvgOrderByAggregateInput
    _max?: incumbentsMaxOrderByAggregateInput
    _min?: incumbentsMinOrderByAggregateInput
    _sum?: incumbentsSumOrderByAggregateInput
  }

  export type incumbentsScalarWhereWithAggregatesInput = {
    AND?: incumbentsScalarWhereWithAggregatesInput | incumbentsScalarWhereWithAggregatesInput[]
    OR?: incumbentsScalarWhereWithAggregatesInput[]
    NOT?: incumbentsScalarWhereWithAggregatesInput | incumbentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"incumbents"> | number
    email?: StringWithAggregatesFilter<"incumbents"> | string
    password?: StringWithAggregatesFilter<"incumbents"> | string
    name?: StringWithAggregatesFilter<"incumbents"> | string
    age?: IntWithAggregatesFilter<"incumbents"> | number
    gender?: EnumGenderWithAggregatesFilter<"incumbents"> | $Enums.Gender
    createdDate?: DateTimeWithAggregatesFilter<"incumbents"> | Date | string
  }

  export type incumbents_additionalWhereInput = {
    AND?: incumbents_additionalWhereInput | incumbents_additionalWhereInput[]
    OR?: incumbents_additionalWhereInput[]
    NOT?: incumbents_additionalWhereInput | incumbents_additionalWhereInput[]
    id?: IntFilter<"incumbents_additional"> | number
    incumbentId?: IntFilter<"incumbents_additional"> | number
    image?: StringNullableFilter<"incumbents_additional"> | string | null
    school?: StringNullableFilter<"incumbents_additional"> | string | null
    jobDescription?: StringNullableFilter<"incumbents_additional"> | string | null
    reportedNum?: IntFilter<"incumbents_additional"> | number
    adviceCount?: IntFilter<"incumbents_additional"> | number
    estimationCount?: FloatFilter<"incumbents_additional"> | number
    major?: StringNullableFilter<"incumbents_additional"> | string | null
    companyName?: StringNullableFilter<"incumbents_additional"> | string | null
    companyWelfare?: StringFilter<"incumbents_additional"> | string
    companyLocation?: StringNullableFilter<"incumbents_additional"> | string | null
    updatedDate?: DateTimeFilter<"incumbents_additional"> | Date | string
    incumbents?: XOR<IncumbentsRelationFilter, incumbentsWhereInput>
  }

  export type incumbents_additionalOrderByWithRelationInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    image?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    major?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyWelfare?: SortOrder
    companyLocation?: SortOrderInput | SortOrder
    updatedDate?: SortOrder
    incumbents?: incumbentsOrderByWithRelationInput
  }

  export type incumbents_additionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    incumbentId?: number
    AND?: incumbents_additionalWhereInput | incumbents_additionalWhereInput[]
    OR?: incumbents_additionalWhereInput[]
    NOT?: incumbents_additionalWhereInput | incumbents_additionalWhereInput[]
    image?: StringNullableFilter<"incumbents_additional"> | string | null
    school?: StringNullableFilter<"incumbents_additional"> | string | null
    jobDescription?: StringNullableFilter<"incumbents_additional"> | string | null
    reportedNum?: IntFilter<"incumbents_additional"> | number
    adviceCount?: IntFilter<"incumbents_additional"> | number
    estimationCount?: FloatFilter<"incumbents_additional"> | number
    major?: StringNullableFilter<"incumbents_additional"> | string | null
    companyName?: StringNullableFilter<"incumbents_additional"> | string | null
    companyWelfare?: StringFilter<"incumbents_additional"> | string
    companyLocation?: StringNullableFilter<"incumbents_additional"> | string | null
    updatedDate?: DateTimeFilter<"incumbents_additional"> | Date | string
    incumbents?: XOR<IncumbentsRelationFilter, incumbentsWhereInput>
  }, "id" | "incumbentId">

  export type incumbents_additionalOrderByWithAggregationInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    image?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    major?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyWelfare?: SortOrder
    companyLocation?: SortOrderInput | SortOrder
    updatedDate?: SortOrder
    _count?: incumbents_additionalCountOrderByAggregateInput
    _avg?: incumbents_additionalAvgOrderByAggregateInput
    _max?: incumbents_additionalMaxOrderByAggregateInput
    _min?: incumbents_additionalMinOrderByAggregateInput
    _sum?: incumbents_additionalSumOrderByAggregateInput
  }

  export type incumbents_additionalScalarWhereWithAggregatesInput = {
    AND?: incumbents_additionalScalarWhereWithAggregatesInput | incumbents_additionalScalarWhereWithAggregatesInput[]
    OR?: incumbents_additionalScalarWhereWithAggregatesInput[]
    NOT?: incumbents_additionalScalarWhereWithAggregatesInput | incumbents_additionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"incumbents_additional"> | number
    incumbentId?: IntWithAggregatesFilter<"incumbents_additional"> | number
    image?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    school?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    jobDescription?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    reportedNum?: IntWithAggregatesFilter<"incumbents_additional"> | number
    adviceCount?: IntWithAggregatesFilter<"incumbents_additional"> | number
    estimationCount?: FloatWithAggregatesFilter<"incumbents_additional"> | number
    major?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    companyWelfare?: StringWithAggregatesFilter<"incumbents_additional"> | string
    companyLocation?: StringNullableWithAggregatesFilter<"incumbents_additional"> | string | null
    updatedDate?: DateTimeWithAggregatesFilter<"incumbents_additional"> | Date | string
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    id?: IntFilter<"students"> | number
    email?: StringFilter<"students"> | string
    password?: StringFilter<"students"> | string
    name?: StringFilter<"students"> | string
    age?: IntFilter<"students"> | number
    gender?: EnumGenderFilter<"students"> | $Enums.Gender
    createdDate?: DateTimeFilter<"students"> | Date | string
    student_additional?: XOR<Students_additionalNullableRelationFilter, students_additionalWhereInput> | null
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }

  export type studentsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
    student_additional?: students_additionalOrderByWithRelationInput
    posts?: postsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    recommend_posts?: recommend_postsOrderByRelationAggregateInput
    recommend_comments?: recommend_commentsOrderByRelationAggregateInput
    reported_posts?: reported_postsOrderByRelationAggregateInput
    reported_comments?: reported_commentsOrderByRelationAggregateInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    password?: StringFilter<"students"> | string
    name?: StringFilter<"students"> | string
    age?: IntFilter<"students"> | number
    gender?: EnumGenderFilter<"students"> | $Enums.Gender
    createdDate?: DateTimeFilter<"students"> | Date | string
    student_additional?: XOR<Students_additionalNullableRelationFilter, students_additionalWhereInput> | null
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }, "id" | "email">

  export type studentsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"students"> | number
    email?: StringWithAggregatesFilter<"students"> | string
    password?: StringWithAggregatesFilter<"students"> | string
    name?: StringWithAggregatesFilter<"students"> | string
    age?: IntWithAggregatesFilter<"students"> | number
    gender?: EnumGenderWithAggregatesFilter<"students"> | $Enums.Gender
    createdDate?: DateTimeWithAggregatesFilter<"students"> | Date | string
  }

  export type students_additionalWhereInput = {
    AND?: students_additionalWhereInput | students_additionalWhereInput[]
    OR?: students_additionalWhereInput[]
    NOT?: students_additionalWhereInput | students_additionalWhereInput[]
    id?: IntFilter<"students_additional"> | number
    studentId?: IntFilter<"students_additional"> | number
    image?: StringNullableFilter<"students_additional"> | string | null
    major?: StringNullableFilter<"students_additional"> | string | null
    school?: StringNullableFilter<"students_additional"> | string | null
    reportedNum?: IntFilter<"students_additional"> | number
    totalGrade?: FloatNullableFilter<"students_additional"> | number | null
    adviceCount?: IntFilter<"students_additional"> | number
    estimationCount?: FloatFilter<"students_additional"> | number
    wishJobDescription?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyName?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyWelfare?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyLocation?: StringNullableFilter<"students_additional"> | string | null
    updatedDate?: DateTimeFilter<"students_additional"> | Date | string
    students?: XOR<StudentsRelationFilter, studentsWhereInput>
  }

  export type students_additionalOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrderInput | SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    wishJobDescription?: SortOrderInput | SortOrder
    wishCompanyName?: SortOrderInput | SortOrder
    wishCompanyWelfare?: SortOrderInput | SortOrder
    wishCompanyLocation?: SortOrderInput | SortOrder
    updatedDate?: SortOrder
    students?: studentsOrderByWithRelationInput
  }

  export type students_additionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: number
    AND?: students_additionalWhereInput | students_additionalWhereInput[]
    OR?: students_additionalWhereInput[]
    NOT?: students_additionalWhereInput | students_additionalWhereInput[]
    image?: StringNullableFilter<"students_additional"> | string | null
    major?: StringNullableFilter<"students_additional"> | string | null
    school?: StringNullableFilter<"students_additional"> | string | null
    reportedNum?: IntFilter<"students_additional"> | number
    totalGrade?: FloatNullableFilter<"students_additional"> | number | null
    adviceCount?: IntFilter<"students_additional"> | number
    estimationCount?: FloatFilter<"students_additional"> | number
    wishJobDescription?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyName?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyWelfare?: StringNullableFilter<"students_additional"> | string | null
    wishCompanyLocation?: StringNullableFilter<"students_additional"> | string | null
    updatedDate?: DateTimeFilter<"students_additional"> | Date | string
    students?: XOR<StudentsRelationFilter, studentsWhereInput>
  }, "id" | "studentId">

  export type students_additionalOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrderInput | SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    wishJobDescription?: SortOrderInput | SortOrder
    wishCompanyName?: SortOrderInput | SortOrder
    wishCompanyWelfare?: SortOrderInput | SortOrder
    wishCompanyLocation?: SortOrderInput | SortOrder
    updatedDate?: SortOrder
    _count?: students_additionalCountOrderByAggregateInput
    _avg?: students_additionalAvgOrderByAggregateInput
    _max?: students_additionalMaxOrderByAggregateInput
    _min?: students_additionalMinOrderByAggregateInput
    _sum?: students_additionalSumOrderByAggregateInput
  }

  export type students_additionalScalarWhereWithAggregatesInput = {
    AND?: students_additionalScalarWhereWithAggregatesInput | students_additionalScalarWhereWithAggregatesInput[]
    OR?: students_additionalScalarWhereWithAggregatesInput[]
    NOT?: students_additionalScalarWhereWithAggregatesInput | students_additionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"students_additional"> | number
    studentId?: IntWithAggregatesFilter<"students_additional"> | number
    image?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    major?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    school?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    reportedNum?: IntWithAggregatesFilter<"students_additional"> | number
    totalGrade?: FloatNullableWithAggregatesFilter<"students_additional"> | number | null
    adviceCount?: IntWithAggregatesFilter<"students_additional"> | number
    estimationCount?: FloatWithAggregatesFilter<"students_additional"> | number
    wishJobDescription?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    wishCompanyName?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    wishCompanyWelfare?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    wishCompanyLocation?: StringNullableWithAggregatesFilter<"students_additional"> | string | null
    updatedDate?: DateTimeWithAggregatesFilter<"students_additional"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    posts?: PostsListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    posts?: postsOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    posts?: PostsListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    incumbentId?: IntNullableFilter<"posts"> | number | null
    studentId?: IntNullableFilter<"posts"> | number | null
    categoryId?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    view?: IntFilter<"posts"> | number
    recommend?: IntFilter<"posts"> | number
    reported?: IntFilter<"posts"> | number
    createdDate?: DateTimeFilter<"posts"> | Date | string
    updatedDate?: DateTimeFilter<"posts"> | Date | string
    categories?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    categories?: categoryOrderByWithRelationInput
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
    comments?: commentsOrderByRelationAggregateInput
    recommend_posts?: recommend_postsOrderByRelationAggregateInput
    reported_posts?: reported_postsOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    incumbentId?: IntNullableFilter<"posts"> | number | null
    studentId?: IntNullableFilter<"posts"> | number | null
    categoryId?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    view?: IntFilter<"posts"> | number
    recommend?: IntFilter<"posts"> | number
    reported?: IntFilter<"posts"> | number
    createdDate?: DateTimeFilter<"posts"> | Date | string
    updatedDate?: DateTimeFilter<"posts"> | Date | string
    categories?: XOR<CategoryNullableRelationFilter, categoryWhereInput> | null
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    comments?: CommentsListRelationFilter
    recommend_posts?: Recommend_postsListRelationFilter
    reported_posts?: Reported_postsListRelationFilter
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"posts"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"posts"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"posts"> | number | null
    title?: StringWithAggregatesFilter<"posts"> | string
    content?: StringWithAggregatesFilter<"posts"> | string
    view?: IntWithAggregatesFilter<"posts"> | number
    recommend?: IntWithAggregatesFilter<"posts"> | number
    reported?: IntWithAggregatesFilter<"posts"> | number
    createdDate?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"posts"> | Date | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    postId?: IntFilter<"comments"> | number
    incumbentId?: IntNullableFilter<"comments"> | number | null
    studentId?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    parentCommentId?: IntNullableFilter<"comments"> | number | null
    recommend?: IntFilter<"comments"> | number
    reported?: IntFilter<"comments"> | number
    createdDate?: DateTimeFilter<"comments"> | Date | string
    updatedDate?: DateTimeFilter<"comments"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
    parent?: XOR<CommentsNullableRelationFilter, commentsWhereInput> | null
    replies?: CommentsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    content?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
    parent?: commentsOrderByWithRelationInput
    replies?: commentsOrderByRelationAggregateInput
    recommend_comments?: recommend_commentsOrderByRelationAggregateInput
    reported_comments?: reported_commentsOrderByRelationAggregateInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    postId?: IntFilter<"comments"> | number
    incumbentId?: IntNullableFilter<"comments"> | number | null
    studentId?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    parentCommentId?: IntNullableFilter<"comments"> | number | null
    recommend?: IntFilter<"comments"> | number
    reported?: IntFilter<"comments"> | number
    createdDate?: DateTimeFilter<"comments"> | Date | string
    updatedDate?: DateTimeFilter<"comments"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
    parent?: XOR<CommentsNullableRelationFilter, commentsWhereInput> | null
    replies?: CommentsListRelationFilter
    recommend_comments?: Recommend_commentsListRelationFilter
    reported_comments?: Reported_commentsListRelationFilter
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    content?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    postId?: IntWithAggregatesFilter<"comments"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"comments"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"comments"> | number | null
    content?: StringWithAggregatesFilter<"comments"> | string
    parentCommentId?: IntNullableWithAggregatesFilter<"comments"> | number | null
    recommend?: IntWithAggregatesFilter<"comments"> | number
    reported?: IntWithAggregatesFilter<"comments"> | number
    createdDate?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    updatedDate?: DateTimeWithAggregatesFilter<"comments"> | Date | string
  }

  export type recommend_postsWhereInput = {
    AND?: recommend_postsWhereInput | recommend_postsWhereInput[]
    OR?: recommend_postsWhereInput[]
    NOT?: recommend_postsWhereInput | recommend_postsWhereInput[]
    id?: IntFilter<"recommend_posts"> | number
    postId?: IntFilter<"recommend_posts"> | number
    incumbentId?: IntNullableFilter<"recommend_posts"> | number | null
    studentId?: IntNullableFilter<"recommend_posts"> | number | null
    createdDate?: DateTimeFilter<"recommend_posts"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }

  export type recommend_postsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
  }

  export type recommend_postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recommend_postsWhereInput | recommend_postsWhereInput[]
    OR?: recommend_postsWhereInput[]
    NOT?: recommend_postsWhereInput | recommend_postsWhereInput[]
    postId?: IntFilter<"recommend_posts"> | number
    incumbentId?: IntNullableFilter<"recommend_posts"> | number | null
    studentId?: IntNullableFilter<"recommend_posts"> | number | null
    createdDate?: DateTimeFilter<"recommend_posts"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }, "id">

  export type recommend_postsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    _count?: recommend_postsCountOrderByAggregateInput
    _avg?: recommend_postsAvgOrderByAggregateInput
    _max?: recommend_postsMaxOrderByAggregateInput
    _min?: recommend_postsMinOrderByAggregateInput
    _sum?: recommend_postsSumOrderByAggregateInput
  }

  export type recommend_postsScalarWhereWithAggregatesInput = {
    AND?: recommend_postsScalarWhereWithAggregatesInput | recommend_postsScalarWhereWithAggregatesInput[]
    OR?: recommend_postsScalarWhereWithAggregatesInput[]
    NOT?: recommend_postsScalarWhereWithAggregatesInput | recommend_postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recommend_posts"> | number
    postId?: IntWithAggregatesFilter<"recommend_posts"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"recommend_posts"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"recommend_posts"> | number | null
    createdDate?: DateTimeWithAggregatesFilter<"recommend_posts"> | Date | string
  }

  export type reported_postsWhereInput = {
    AND?: reported_postsWhereInput | reported_postsWhereInput[]
    OR?: reported_postsWhereInput[]
    NOT?: reported_postsWhereInput | reported_postsWhereInput[]
    id?: IntFilter<"reported_posts"> | number
    postId?: IntFilter<"reported_posts"> | number
    incumbentId?: IntNullableFilter<"reported_posts"> | number | null
    studentId?: IntNullableFilter<"reported_posts"> | number | null
    reason?: StringFilter<"reported_posts"> | string
    createdDate?: DateTimeFilter<"reported_posts"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }

  export type reported_postsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
  }

  export type reported_postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reported_postsWhereInput | reported_postsWhereInput[]
    OR?: reported_postsWhereInput[]
    NOT?: reported_postsWhereInput | reported_postsWhereInput[]
    postId?: IntFilter<"reported_posts"> | number
    incumbentId?: IntNullableFilter<"reported_posts"> | number | null
    studentId?: IntNullableFilter<"reported_posts"> | number | null
    reason?: StringFilter<"reported_posts"> | string
    createdDate?: DateTimeFilter<"reported_posts"> | Date | string
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }, "id">

  export type reported_postsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
    _count?: reported_postsCountOrderByAggregateInput
    _avg?: reported_postsAvgOrderByAggregateInput
    _max?: reported_postsMaxOrderByAggregateInput
    _min?: reported_postsMinOrderByAggregateInput
    _sum?: reported_postsSumOrderByAggregateInput
  }

  export type reported_postsScalarWhereWithAggregatesInput = {
    AND?: reported_postsScalarWhereWithAggregatesInput | reported_postsScalarWhereWithAggregatesInput[]
    OR?: reported_postsScalarWhereWithAggregatesInput[]
    NOT?: reported_postsScalarWhereWithAggregatesInput | reported_postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reported_posts"> | number
    postId?: IntWithAggregatesFilter<"reported_posts"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"reported_posts"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"reported_posts"> | number | null
    reason?: StringWithAggregatesFilter<"reported_posts"> | string
    createdDate?: DateTimeWithAggregatesFilter<"reported_posts"> | Date | string
  }

  export type recommend_commentsWhereInput = {
    AND?: recommend_commentsWhereInput | recommend_commentsWhereInput[]
    OR?: recommend_commentsWhereInput[]
    NOT?: recommend_commentsWhereInput | recommend_commentsWhereInput[]
    id?: IntFilter<"recommend_comments"> | number
    commendId?: IntFilter<"recommend_comments"> | number
    incumbentId?: IntNullableFilter<"recommend_comments"> | number | null
    studentId?: IntNullableFilter<"recommend_comments"> | number | null
    createdDate?: DateTimeFilter<"recommend_comments"> | Date | string
    comment?: XOR<CommentsRelationFilter, commentsWhereInput>
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
  }

  export type recommend_commentsOrderByWithRelationInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    comment?: commentsOrderByWithRelationInput
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type recommend_commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recommend_commentsWhereInput | recommend_commentsWhereInput[]
    OR?: recommend_commentsWhereInput[]
    NOT?: recommend_commentsWhereInput | recommend_commentsWhereInput[]
    commendId?: IntFilter<"recommend_comments"> | number
    incumbentId?: IntNullableFilter<"recommend_comments"> | number | null
    studentId?: IntNullableFilter<"recommend_comments"> | number | null
    createdDate?: DateTimeFilter<"recommend_comments"> | Date | string
    comment?: XOR<CommentsRelationFilter, commentsWhereInput>
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
  }, "id">

  export type recommend_commentsOrderByWithAggregationInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    _count?: recommend_commentsCountOrderByAggregateInput
    _avg?: recommend_commentsAvgOrderByAggregateInput
    _max?: recommend_commentsMaxOrderByAggregateInput
    _min?: recommend_commentsMinOrderByAggregateInput
    _sum?: recommend_commentsSumOrderByAggregateInput
  }

  export type recommend_commentsScalarWhereWithAggregatesInput = {
    AND?: recommend_commentsScalarWhereWithAggregatesInput | recommend_commentsScalarWhereWithAggregatesInput[]
    OR?: recommend_commentsScalarWhereWithAggregatesInput[]
    NOT?: recommend_commentsScalarWhereWithAggregatesInput | recommend_commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recommend_comments"> | number
    commendId?: IntWithAggregatesFilter<"recommend_comments"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"recommend_comments"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"recommend_comments"> | number | null
    createdDate?: DateTimeWithAggregatesFilter<"recommend_comments"> | Date | string
  }

  export type reported_commentsWhereInput = {
    AND?: reported_commentsWhereInput | reported_commentsWhereInput[]
    OR?: reported_commentsWhereInput[]
    NOT?: reported_commentsWhereInput | reported_commentsWhereInput[]
    id?: IntFilter<"reported_comments"> | number
    commendId?: IntFilter<"reported_comments"> | number
    incumbentId?: IntNullableFilter<"reported_comments"> | number | null
    studentId?: IntNullableFilter<"reported_comments"> | number | null
    reason?: StringFilter<"reported_comments"> | string
    createdDate?: DateTimeFilter<"reported_comments"> | Date | string
    comment?: XOR<CommentsRelationFilter, commentsWhereInput>
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
  }

  export type reported_commentsOrderByWithRelationInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
    comment?: commentsOrderByWithRelationInput
    incumbents?: incumbentsOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type reported_commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reported_commentsWhereInput | reported_commentsWhereInput[]
    OR?: reported_commentsWhereInput[]
    NOT?: reported_commentsWhereInput | reported_commentsWhereInput[]
    commendId?: IntFilter<"reported_comments"> | number
    incumbentId?: IntNullableFilter<"reported_comments"> | number | null
    studentId?: IntNullableFilter<"reported_comments"> | number | null
    reason?: StringFilter<"reported_comments"> | string
    createdDate?: DateTimeFilter<"reported_comments"> | Date | string
    comment?: XOR<CommentsRelationFilter, commentsWhereInput>
    incumbents?: XOR<IncumbentsNullableRelationFilter, incumbentsWhereInput> | null
    students?: XOR<StudentsNullableRelationFilter, studentsWhereInput> | null
  }, "id">

  export type reported_commentsOrderByWithAggregationInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
    _count?: reported_commentsCountOrderByAggregateInput
    _avg?: reported_commentsAvgOrderByAggregateInput
    _max?: reported_commentsMaxOrderByAggregateInput
    _min?: reported_commentsMinOrderByAggregateInput
    _sum?: reported_commentsSumOrderByAggregateInput
  }

  export type reported_commentsScalarWhereWithAggregatesInput = {
    AND?: reported_commentsScalarWhereWithAggregatesInput | reported_commentsScalarWhereWithAggregatesInput[]
    OR?: reported_commentsScalarWhereWithAggregatesInput[]
    NOT?: reported_commentsScalarWhereWithAggregatesInput | reported_commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reported_comments"> | number
    commendId?: IntWithAggregatesFilter<"reported_comments"> | number
    incumbentId?: IntNullableWithAggregatesFilter<"reported_comments"> | number | null
    studentId?: IntNullableWithAggregatesFilter<"reported_comments"> | number | null
    reason?: StringWithAggregatesFilter<"reported_comments"> | string
    createdDate?: DateTimeWithAggregatesFilter<"reported_comments"> | Date | string
  }

  export type incumbentsCreateInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
  }

  export type incumbentsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incumbentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incumbents_additionalCreateInput = {
    image?: string | null
    school?: string | null
    jobDescription?: string | null
    reportedNum?: number
    adviceCount?: number
    estimationCount?: number
    major?: string | null
    companyName?: string | null
    companyWelfare?: string
    companyLocation?: string | null
    updatedDate?: Date | string
    incumbents: incumbentsCreateNestedOneWithoutIncumbent_additionalInput
  }

  export type incumbents_additionalUncheckedCreateInput = {
    id?: number
    incumbentId: number
    image?: string | null
    school?: string | null
    jobDescription?: string | null
    reportedNum?: number
    adviceCount?: number
    estimationCount?: number
    major?: string | null
    companyName?: string | null
    companyWelfare?: string
    companyLocation?: string | null
    updatedDate?: Date | string
  }

  export type incumbents_additionalUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneRequiredWithoutIncumbent_additionalNestedInput
  }

  export type incumbents_additionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incumbents_additionalCreateManyInput = {
    id?: number
    incumbentId: number
    image?: string | null
    school?: string | null
    jobDescription?: string | null
    reportedNum?: number
    adviceCount?: number
    estimationCount?: number
    major?: string | null
    companyName?: string | null
    companyWelfare?: string
    companyLocation?: string | null
    updatedDate?: Date | string
  }

  export type incumbents_additionalUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incumbents_additionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsCreateInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
  }

  export type studentsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type students_additionalCreateInput = {
    image?: string | null
    major?: string | null
    school?: string | null
    reportedNum?: number
    totalGrade?: number | null
    adviceCount?: number
    estimationCount?: number
    wishJobDescription?: string | null
    wishCompanyName?: string | null
    wishCompanyWelfare?: string | null
    wishCompanyLocation?: string | null
    updatedDate?: Date | string
    students: studentsCreateNestedOneWithoutStudent_additionalInput
  }

  export type students_additionalUncheckedCreateInput = {
    id?: number
    studentId: number
    image?: string | null
    major?: string | null
    school?: string | null
    reportedNum?: number
    totalGrade?: number | null
    adviceCount?: number
    estimationCount?: number
    wishJobDescription?: string | null
    wishCompanyName?: string | null
    wishCompanyWelfare?: string | null
    wishCompanyLocation?: string | null
    updatedDate?: Date | string
  }

  export type students_additionalUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateOneRequiredWithoutStudent_additionalNestedInput
  }

  export type students_additionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type students_additionalCreateManyInput = {
    id?: number
    studentId: number
    image?: string | null
    major?: string | null
    school?: string | null
    reportedNum?: number
    totalGrade?: number | null
    adviceCount?: number
    estimationCount?: number
    wishJobDescription?: string | null
    wishCompanyName?: string | null
    wishCompanyWelfare?: string | null
    wishCompanyLocation?: string | null
    updatedDate?: Date | string
  }

  export type students_additionalUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type students_additionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    name: string
    posts?: postsCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    posts?: postsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    posts?: postsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type postsCreateInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsCreateManyInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsCreateManyInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsCreateInput = {
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_postsInput
    students?: studentsCreateNestedOneWithoutRecommend_postsInput
    post: postsCreateNestedOneWithoutRecommend_postsInput
  }

  export type recommend_postsUncheckedCreateInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_postsUpdateInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutRecommend_postsNestedInput
    students?: studentsUpdateOneWithoutRecommend_postsNestedInput
    post?: postsUpdateOneRequiredWithoutRecommend_postsNestedInput
  }

  export type recommend_postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsCreateManyInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_postsUpdateManyMutationInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsCreateInput = {
    reason: string
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutReported_postsInput
    students?: studentsCreateNestedOneWithoutReported_postsInput
    post: postsCreateNestedOneWithoutReported_postsInput
  }

  export type reported_postsUncheckedCreateInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_postsUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutReported_postsNestedInput
    students?: studentsUpdateOneWithoutReported_postsNestedInput
    post?: postsUpdateOneRequiredWithoutReported_postsNestedInput
  }

  export type reported_postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsCreateManyInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_postsUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsCreateInput = {
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutRecommend_commentsInput
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_commentsInput
    students?: studentsCreateNestedOneWithoutRecommend_commentsInput
  }

  export type recommend_commentsUncheckedCreateInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsUpdateInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutRecommend_commentsNestedInput
    incumbents?: incumbentsUpdateOneWithoutRecommend_commentsNestedInput
    students?: studentsUpdateOneWithoutRecommend_commentsNestedInput
  }

  export type recommend_commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsCreateManyInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsUpdateManyMutationInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsCreateInput = {
    reason: string
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutReported_commentsInput
    incumbents?: incumbentsCreateNestedOneWithoutReported_commentsInput
    students?: studentsCreateNestedOneWithoutReported_commentsInput
  }

  export type reported_commentsUncheckedCreateInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutReported_commentsNestedInput
    incumbents?: incumbentsUpdateOneWithoutReported_commentsNestedInput
    students?: studentsUpdateOneWithoutReported_commentsNestedInput
  }

  export type reported_commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsCreateManyInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Incumbents_additionalNullableRelationFilter = {
    is?: incumbents_additionalWhereInput | null
    isNot?: incumbents_additionalWhereInput | null
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Recommend_postsListRelationFilter = {
    every?: recommend_postsWhereInput
    some?: recommend_postsWhereInput
    none?: recommend_postsWhereInput
  }

  export type Recommend_commentsListRelationFilter = {
    every?: recommend_commentsWhereInput
    some?: recommend_commentsWhereInput
    none?: recommend_commentsWhereInput
  }

  export type Reported_postsListRelationFilter = {
    every?: reported_postsWhereInput
    some?: reported_postsWhereInput
    none?: reported_postsWhereInput
  }

  export type Reported_commentsListRelationFilter = {
    every?: reported_commentsWhereInput
    some?: reported_commentsWhereInput
    none?: reported_commentsWhereInput
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recommend_postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recommend_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reported_postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reported_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type incumbentsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type incumbentsAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type incumbentsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type incumbentsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type incumbentsSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IncumbentsRelationFilter = {
    is?: incumbentsWhereInput
    isNot?: incumbentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type incumbents_additionalCountOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    image?: SortOrder
    school?: SortOrder
    jobDescription?: SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    major?: SortOrder
    companyName?: SortOrder
    companyWelfare?: SortOrder
    companyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type incumbents_additionalAvgOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
  }

  export type incumbents_additionalMaxOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    image?: SortOrder
    school?: SortOrder
    jobDescription?: SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    major?: SortOrder
    companyName?: SortOrder
    companyWelfare?: SortOrder
    companyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type incumbents_additionalMinOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    image?: SortOrder
    school?: SortOrder
    jobDescription?: SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    major?: SortOrder
    companyName?: SortOrder
    companyWelfare?: SortOrder
    companyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type incumbents_additionalSumOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    reportedNum?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Students_additionalNullableRelationFilter = {
    is?: students_additionalWhereInput | null
    isNot?: students_additionalWhereInput | null
  }

  export type studentsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    createdDate?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentsRelationFilter = {
    is?: studentsWhereInput
    isNot?: studentsWhereInput
  }

  export type students_additionalCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    major?: SortOrder
    school?: SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    wishJobDescription?: SortOrder
    wishCompanyName?: SortOrder
    wishCompanyWelfare?: SortOrder
    wishCompanyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type students_additionalAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
  }

  export type students_additionalMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    major?: SortOrder
    school?: SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    wishJobDescription?: SortOrder
    wishCompanyName?: SortOrder
    wishCompanyWelfare?: SortOrder
    wishCompanyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type students_additionalMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    major?: SortOrder
    school?: SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
    wishJobDescription?: SortOrder
    wishCompanyName?: SortOrder
    wishCompanyWelfare?: SortOrder
    wishCompanyLocation?: SortOrder
    updatedDate?: SortOrder
  }

  export type students_additionalSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    reportedNum?: SortOrder
    totalGrade?: SortOrder
    adviceCount?: SortOrder
    estimationCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type IncumbentsNullableRelationFilter = {
    is?: incumbentsWhereInput | null
    isNot?: incumbentsWhereInput | null
  }

  export type StudentsNullableRelationFilter = {
    is?: studentsWhereInput | null
    isNot?: studentsWhereInput | null
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    categoryId?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    categoryId?: SortOrder
    view?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PostsRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type CommentsNullableRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    parentCommentId?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    parentCommentId?: SortOrder
    recommend?: SortOrder
    reported?: SortOrder
  }

  export type recommend_postsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_postsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type recommend_postsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_postsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_postsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type reported_postsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_postsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type reported_postsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_postsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_postsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type CommentsRelationFilter = {
    is?: commentsWhereInput
    isNot?: commentsWhereInput
  }

  export type recommend_commentsCountOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type recommend_commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_commentsMinOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    createdDate?: SortOrder
  }

  export type recommend_commentsSumOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type reported_commentsCountOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type reported_commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_commentsMinOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    createdDate?: SortOrder
  }

  export type reported_commentsSumOrderByAggregateInput = {
    id?: SortOrder
    commendId?: SortOrder
    incumbentId?: SortOrder
    studentId?: SortOrder
  }

  export type incumbents_additionalCreateNestedOneWithoutIncumbentsInput = {
    create?: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
    connectOrCreate?: incumbents_additionalCreateOrConnectWithoutIncumbentsInput
    connect?: incumbents_additionalWhereUniqueInput
  }

  export type postsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput> | postsCreateWithoutIncumbentsInput[] | postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutIncumbentsInput | postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: postsCreateManyIncumbentsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput> | commentsCreateWithoutIncumbentsInput[] | commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutIncumbentsInput | commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: commentsCreateManyIncumbentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput> | recommend_postsCreateWithoutIncumbentsInput[] | recommend_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutIncumbentsInput | recommend_postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: recommend_postsCreateManyIncumbentsInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type recommend_commentsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput> | recommend_commentsCreateWithoutIncumbentsInput[] | recommend_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutIncumbentsInput | recommend_commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: recommend_commentsCreateManyIncumbentsInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_postsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput> | reported_postsCreateWithoutIncumbentsInput[] | reported_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutIncumbentsInput | reported_postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: reported_postsCreateManyIncumbentsInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type reported_commentsCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput> | reported_commentsCreateWithoutIncumbentsInput[] | reported_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutIncumbentsInput | reported_commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: reported_commentsCreateManyIncumbentsInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput = {
    create?: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
    connectOrCreate?: incumbents_additionalCreateOrConnectWithoutIncumbentsInput
    connect?: incumbents_additionalWhereUniqueInput
  }

  export type postsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput> | postsCreateWithoutIncumbentsInput[] | postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutIncumbentsInput | postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: postsCreateManyIncumbentsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput> | commentsCreateWithoutIncumbentsInput[] | commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutIncumbentsInput | commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: commentsCreateManyIncumbentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput> | recommend_postsCreateWithoutIncumbentsInput[] | recommend_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutIncumbentsInput | recommend_postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: recommend_postsCreateManyIncumbentsInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput> | recommend_commentsCreateWithoutIncumbentsInput[] | recommend_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutIncumbentsInput | recommend_commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: recommend_commentsCreateManyIncumbentsInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput> | reported_postsCreateWithoutIncumbentsInput[] | reported_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutIncumbentsInput | reported_postsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: reported_postsCreateManyIncumbentsInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput = {
    create?: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput> | reported_commentsCreateWithoutIncumbentsInput[] | reported_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutIncumbentsInput | reported_commentsCreateOrConnectWithoutIncumbentsInput[]
    createMany?: reported_commentsCreateManyIncumbentsInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type incumbents_additionalUpdateOneWithoutIncumbentsNestedInput = {
    create?: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
    connectOrCreate?: incumbents_additionalCreateOrConnectWithoutIncumbentsInput
    upsert?: incumbents_additionalUpsertWithoutIncumbentsInput
    disconnect?: incumbents_additionalWhereInput | boolean
    delete?: incumbents_additionalWhereInput | boolean
    connect?: incumbents_additionalWhereUniqueInput
    update?: XOR<XOR<incumbents_additionalUpdateToOneWithWhereWithoutIncumbentsInput, incumbents_additionalUpdateWithoutIncumbentsInput>, incumbents_additionalUncheckedUpdateWithoutIncumbentsInput>
  }

  export type postsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput> | postsCreateWithoutIncumbentsInput[] | postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutIncumbentsInput | postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutIncumbentsInput | postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: postsCreateManyIncumbentsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutIncumbentsInput | postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutIncumbentsInput | postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput> | commentsCreateWithoutIncumbentsInput[] | commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutIncumbentsInput | commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutIncumbentsInput | commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: commentsCreateManyIncumbentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutIncumbentsInput | commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutIncumbentsInput | commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput> | recommend_postsCreateWithoutIncumbentsInput[] | recommend_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutIncumbentsInput | recommend_postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutIncumbentsInput | recommend_postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: recommend_postsCreateManyIncumbentsInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutIncumbentsInput | recommend_postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutIncumbentsInput | recommend_postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type recommend_commentsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput> | recommend_commentsCreateWithoutIncumbentsInput[] | recommend_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutIncumbentsInput | recommend_commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutIncumbentsInput | recommend_commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: recommend_commentsCreateManyIncumbentsInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutIncumbentsInput | recommend_commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutIncumbentsInput | recommend_commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_postsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput> | reported_postsCreateWithoutIncumbentsInput[] | reported_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutIncumbentsInput | reported_postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutIncumbentsInput | reported_postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: reported_postsCreateManyIncumbentsInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutIncumbentsInput | reported_postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutIncumbentsInput | reported_postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type reported_commentsUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput> | reported_commentsCreateWithoutIncumbentsInput[] | reported_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutIncumbentsInput | reported_commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutIncumbentsInput | reported_commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: reported_commentsCreateManyIncumbentsInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutIncumbentsInput | reported_commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutIncumbentsInput | reported_commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput = {
    create?: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
    connectOrCreate?: incumbents_additionalCreateOrConnectWithoutIncumbentsInput
    upsert?: incumbents_additionalUpsertWithoutIncumbentsInput
    disconnect?: incumbents_additionalWhereInput | boolean
    delete?: incumbents_additionalWhereInput | boolean
    connect?: incumbents_additionalWhereUniqueInput
    update?: XOR<XOR<incumbents_additionalUpdateToOneWithWhereWithoutIncumbentsInput, incumbents_additionalUpdateWithoutIncumbentsInput>, incumbents_additionalUncheckedUpdateWithoutIncumbentsInput>
  }

  export type postsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput> | postsCreateWithoutIncumbentsInput[] | postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutIncumbentsInput | postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutIncumbentsInput | postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: postsCreateManyIncumbentsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutIncumbentsInput | postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutIncumbentsInput | postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput> | commentsCreateWithoutIncumbentsInput[] | commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutIncumbentsInput | commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutIncumbentsInput | commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: commentsCreateManyIncumbentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutIncumbentsInput | commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutIncumbentsInput | commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput> | recommend_postsCreateWithoutIncumbentsInput[] | recommend_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutIncumbentsInput | recommend_postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutIncumbentsInput | recommend_postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: recommend_postsCreateManyIncumbentsInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutIncumbentsInput | recommend_postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutIncumbentsInput | recommend_postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput> | recommend_commentsCreateWithoutIncumbentsInput[] | recommend_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutIncumbentsInput | recommend_commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutIncumbentsInput | recommend_commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: recommend_commentsCreateManyIncumbentsInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutIncumbentsInput | recommend_commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutIncumbentsInput | recommend_commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput> | reported_postsCreateWithoutIncumbentsInput[] | reported_postsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutIncumbentsInput | reported_postsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutIncumbentsInput | reported_postsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: reported_postsCreateManyIncumbentsInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutIncumbentsInput | reported_postsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutIncumbentsInput | reported_postsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput = {
    create?: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput> | reported_commentsCreateWithoutIncumbentsInput[] | reported_commentsUncheckedCreateWithoutIncumbentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutIncumbentsInput | reported_commentsCreateOrConnectWithoutIncumbentsInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutIncumbentsInput | reported_commentsUpsertWithWhereUniqueWithoutIncumbentsInput[]
    createMany?: reported_commentsCreateManyIncumbentsInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutIncumbentsInput | reported_commentsUpdateWithWhereUniqueWithoutIncumbentsInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutIncumbentsInput | reported_commentsUpdateManyWithWhereWithoutIncumbentsInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type incumbentsCreateNestedOneWithoutIncumbent_additionalInput = {
    create?: XOR<incumbentsCreateWithoutIncumbent_additionalInput, incumbentsUncheckedCreateWithoutIncumbent_additionalInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutIncumbent_additionalInput
    connect?: incumbentsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type incumbentsUpdateOneRequiredWithoutIncumbent_additionalNestedInput = {
    create?: XOR<incumbentsCreateWithoutIncumbent_additionalInput, incumbentsUncheckedCreateWithoutIncumbent_additionalInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutIncumbent_additionalInput
    upsert?: incumbentsUpsertWithoutIncumbent_additionalInput
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutIncumbent_additionalInput, incumbentsUpdateWithoutIncumbent_additionalInput>, incumbentsUncheckedUpdateWithoutIncumbent_additionalInput>
  }

  export type students_additionalCreateNestedOneWithoutStudentsInput = {
    create?: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: students_additionalCreateOrConnectWithoutStudentsInput
    connect?: students_additionalWhereUniqueInput
  }

  export type postsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput> | postsCreateWithoutStudentsInput[] | postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutStudentsInput | postsCreateOrConnectWithoutStudentsInput[]
    createMany?: postsCreateManyStudentsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput> | commentsCreateWithoutStudentsInput[] | commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutStudentsInput | commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: commentsCreateManyStudentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput> | recommend_postsCreateWithoutStudentsInput[] | recommend_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutStudentsInput | recommend_postsCreateOrConnectWithoutStudentsInput[]
    createMany?: recommend_postsCreateManyStudentsInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type recommend_commentsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput> | recommend_commentsCreateWithoutStudentsInput[] | recommend_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutStudentsInput | recommend_commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: recommend_commentsCreateManyStudentsInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_postsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput> | reported_postsCreateWithoutStudentsInput[] | reported_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutStudentsInput | reported_postsCreateOrConnectWithoutStudentsInput[]
    createMany?: reported_postsCreateManyStudentsInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type reported_commentsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput> | reported_commentsCreateWithoutStudentsInput[] | reported_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutStudentsInput | reported_commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: reported_commentsCreateManyStudentsInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type students_additionalUncheckedCreateNestedOneWithoutStudentsInput = {
    create?: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: students_additionalCreateOrConnectWithoutStudentsInput
    connect?: students_additionalWhereUniqueInput
  }

  export type postsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput> | postsCreateWithoutStudentsInput[] | postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutStudentsInput | postsCreateOrConnectWithoutStudentsInput[]
    createMany?: postsCreateManyStudentsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput> | commentsCreateWithoutStudentsInput[] | commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutStudentsInput | commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: commentsCreateManyStudentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput> | recommend_postsCreateWithoutStudentsInput[] | recommend_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutStudentsInput | recommend_postsCreateOrConnectWithoutStudentsInput[]
    createMany?: recommend_postsCreateManyStudentsInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput> | recommend_commentsCreateWithoutStudentsInput[] | recommend_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutStudentsInput | recommend_commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: recommend_commentsCreateManyStudentsInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_postsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput> | reported_postsCreateWithoutStudentsInput[] | reported_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutStudentsInput | reported_postsCreateOrConnectWithoutStudentsInput[]
    createMany?: reported_postsCreateManyStudentsInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type reported_commentsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput> | reported_commentsCreateWithoutStudentsInput[] | reported_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutStudentsInput | reported_commentsCreateOrConnectWithoutStudentsInput[]
    createMany?: reported_commentsCreateManyStudentsInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type students_additionalUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: students_additionalCreateOrConnectWithoutStudentsInput
    upsert?: students_additionalUpsertWithoutStudentsInput
    disconnect?: students_additionalWhereInput | boolean
    delete?: students_additionalWhereInput | boolean
    connect?: students_additionalWhereUniqueInput
    update?: XOR<XOR<students_additionalUpdateToOneWithWhereWithoutStudentsInput, students_additionalUpdateWithoutStudentsInput>, students_additionalUncheckedUpdateWithoutStudentsInput>
  }

  export type postsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput> | postsCreateWithoutStudentsInput[] | postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutStudentsInput | postsCreateOrConnectWithoutStudentsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutStudentsInput | postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: postsCreateManyStudentsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutStudentsInput | postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutStudentsInput | postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput> | commentsCreateWithoutStudentsInput[] | commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutStudentsInput | commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutStudentsInput | commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: commentsCreateManyStudentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutStudentsInput | commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutStudentsInput | commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput> | recommend_postsCreateWithoutStudentsInput[] | recommend_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutStudentsInput | recommend_postsCreateOrConnectWithoutStudentsInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutStudentsInput | recommend_postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recommend_postsCreateManyStudentsInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutStudentsInput | recommend_postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutStudentsInput | recommend_postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type recommend_commentsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput> | recommend_commentsCreateWithoutStudentsInput[] | recommend_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutStudentsInput | recommend_commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutStudentsInput | recommend_commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recommend_commentsCreateManyStudentsInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutStudentsInput | recommend_commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutStudentsInput | recommend_commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_postsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput> | reported_postsCreateWithoutStudentsInput[] | reported_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutStudentsInput | reported_postsCreateOrConnectWithoutStudentsInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutStudentsInput | reported_postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: reported_postsCreateManyStudentsInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutStudentsInput | reported_postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutStudentsInput | reported_postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type reported_commentsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput> | reported_commentsCreateWithoutStudentsInput[] | reported_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutStudentsInput | reported_commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutStudentsInput | reported_commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: reported_commentsCreateManyStudentsInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutStudentsInput | reported_commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutStudentsInput | reported_commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type students_additionalUncheckedUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: students_additionalCreateOrConnectWithoutStudentsInput
    upsert?: students_additionalUpsertWithoutStudentsInput
    disconnect?: students_additionalWhereInput | boolean
    delete?: students_additionalWhereInput | boolean
    connect?: students_additionalWhereUniqueInput
    update?: XOR<XOR<students_additionalUpdateToOneWithWhereWithoutStudentsInput, students_additionalUpdateWithoutStudentsInput>, students_additionalUncheckedUpdateWithoutStudentsInput>
  }

  export type postsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput> | postsCreateWithoutStudentsInput[] | postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutStudentsInput | postsCreateOrConnectWithoutStudentsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutStudentsInput | postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: postsCreateManyStudentsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutStudentsInput | postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutStudentsInput | postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput> | commentsCreateWithoutStudentsInput[] | commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutStudentsInput | commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutStudentsInput | commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: commentsCreateManyStudentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutStudentsInput | commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutStudentsInput | commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput> | recommend_postsCreateWithoutStudentsInput[] | recommend_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutStudentsInput | recommend_postsCreateOrConnectWithoutStudentsInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutStudentsInput | recommend_postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recommend_postsCreateManyStudentsInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutStudentsInput | recommend_postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutStudentsInput | recommend_postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput> | recommend_commentsCreateWithoutStudentsInput[] | recommend_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutStudentsInput | recommend_commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutStudentsInput | recommend_commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: recommend_commentsCreateManyStudentsInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutStudentsInput | recommend_commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutStudentsInput | recommend_commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_postsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput> | reported_postsCreateWithoutStudentsInput[] | reported_postsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutStudentsInput | reported_postsCreateOrConnectWithoutStudentsInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutStudentsInput | reported_postsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: reported_postsCreateManyStudentsInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutStudentsInput | reported_postsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutStudentsInput | reported_postsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput> | reported_commentsCreateWithoutStudentsInput[] | reported_commentsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutStudentsInput | reported_commentsCreateOrConnectWithoutStudentsInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutStudentsInput | reported_commentsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: reported_commentsCreateManyStudentsInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutStudentsInput | reported_commentsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutStudentsInput | reported_commentsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type studentsCreateNestedOneWithoutStudent_additionalInput = {
    create?: XOR<studentsCreateWithoutStudent_additionalInput, studentsUncheckedCreateWithoutStudent_additionalInput>
    connectOrCreate?: studentsCreateOrConnectWithoutStudent_additionalInput
    connect?: studentsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type studentsUpdateOneRequiredWithoutStudent_additionalNestedInput = {
    create?: XOR<studentsCreateWithoutStudent_additionalInput, studentsUncheckedCreateWithoutStudent_additionalInput>
    connectOrCreate?: studentsCreateOrConnectWithoutStudent_additionalInput
    upsert?: studentsUpsertWithoutStudent_additionalInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutStudent_additionalInput, studentsUpdateWithoutStudent_additionalInput>, studentsUncheckedUpdateWithoutStudent_additionalInput>
  }

  export type postsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type postsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCategoriesInput | postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCategoriesInput | postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCategoriesInput | postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCategoriesInput | postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCategoriesInput | postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCategoriesInput | postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<categoryCreateWithoutPostsInput, categoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutPostsInput
    connect?: categoryWhereUniqueInput
  }

  export type incumbentsCreateNestedOneWithoutPostsInput = {
    create?: XOR<incumbentsCreateWithoutPostsInput, incumbentsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutPostsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutPostsInput = {
    create?: XOR<studentsCreateWithoutPostsInput, studentsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutPostsInput
    connect?: studentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutPostInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsCreateNestedManyWithoutPostInput = {
    create?: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput> | recommend_postsCreateWithoutPostInput[] | recommend_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutPostInput | recommend_postsCreateOrConnectWithoutPostInput[]
    createMany?: recommend_postsCreateManyPostInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type reported_postsCreateNestedManyWithoutPostInput = {
    create?: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput> | reported_postsCreateWithoutPostInput[] | reported_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutPostInput | reported_postsCreateOrConnectWithoutPostInput[]
    createMany?: reported_postsCreateManyPostInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_postsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput> | recommend_postsCreateWithoutPostInput[] | recommend_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutPostInput | recommend_postsCreateOrConnectWithoutPostInput[]
    createMany?: recommend_postsCreateManyPostInputEnvelope
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
  }

  export type reported_postsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput> | reported_postsCreateWithoutPostInput[] | reported_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutPostInput | reported_postsCreateOrConnectWithoutPostInput[]
    createMany?: reported_postsCreateManyPostInputEnvelope
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
  }

  export type categoryUpdateOneWithoutPostsNestedInput = {
    create?: XOR<categoryCreateWithoutPostsInput, categoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutPostsInput
    upsert?: categoryUpsertWithoutPostsInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutPostsInput, categoryUpdateWithoutPostsInput>, categoryUncheckedUpdateWithoutPostsInput>
  }

  export type incumbentsUpdateOneWithoutPostsNestedInput = {
    create?: XOR<incumbentsCreateWithoutPostsInput, incumbentsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutPostsInput
    upsert?: incumbentsUpsertWithoutPostsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutPostsInput, incumbentsUpdateWithoutPostsInput>, incumbentsUncheckedUpdateWithoutPostsInput>
  }

  export type studentsUpdateOneWithoutPostsNestedInput = {
    create?: XOR<studentsCreateWithoutPostsInput, studentsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutPostsInput
    upsert?: studentsUpsertWithoutPostsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutPostsInput, studentsUpdateWithoutPostsInput>, studentsUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostInput | commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostInput | commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostInput | commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUpdateManyWithoutPostNestedInput = {
    create?: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput> | recommend_postsCreateWithoutPostInput[] | recommend_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutPostInput | recommend_postsCreateOrConnectWithoutPostInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutPostInput | recommend_postsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: recommend_postsCreateManyPostInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutPostInput | recommend_postsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutPostInput | recommend_postsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type reported_postsUpdateManyWithoutPostNestedInput = {
    create?: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput> | reported_postsCreateWithoutPostInput[] | reported_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutPostInput | reported_postsCreateOrConnectWithoutPostInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutPostInput | reported_postsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: reported_postsCreateManyPostInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutPostInput | reported_postsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutPostInput | reported_postsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostInput | commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostInput | commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostInput | commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_postsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput> | recommend_postsCreateWithoutPostInput[] | recommend_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: recommend_postsCreateOrConnectWithoutPostInput | recommend_postsCreateOrConnectWithoutPostInput[]
    upsert?: recommend_postsUpsertWithWhereUniqueWithoutPostInput | recommend_postsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: recommend_postsCreateManyPostInputEnvelope
    set?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    disconnect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    delete?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    connect?: recommend_postsWhereUniqueInput | recommend_postsWhereUniqueInput[]
    update?: recommend_postsUpdateWithWhereUniqueWithoutPostInput | recommend_postsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: recommend_postsUpdateManyWithWhereWithoutPostInput | recommend_postsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
  }

  export type reported_postsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput> | reported_postsCreateWithoutPostInput[] | reported_postsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: reported_postsCreateOrConnectWithoutPostInput | reported_postsCreateOrConnectWithoutPostInput[]
    upsert?: reported_postsUpsertWithWhereUniqueWithoutPostInput | reported_postsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: reported_postsCreateManyPostInputEnvelope
    set?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    disconnect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    delete?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    connect?: reported_postsWhereUniqueInput | reported_postsWhereUniqueInput[]
    update?: reported_postsUpdateWithWhereUniqueWithoutPostInput | reported_postsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: reported_postsUpdateManyWithWhereWithoutPostInput | reported_postsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
  }

  export type incumbentsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<incumbentsCreateWithoutCommentsInput, incumbentsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutCommentsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<studentsCreateWithoutCommentsInput, studentsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutCommentsInput
    connect?: studentsWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type commentsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<commentsCreateWithoutRepliesInput, commentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutRepliesInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutParentInput = {
    create?: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput> | commentsCreateWithoutParentInput[] | commentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParentInput | commentsCreateOrConnectWithoutParentInput[]
    createMany?: commentsCreateManyParentInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_commentsCreateNestedManyWithoutCommentInput = {
    create?: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput> | recommend_commentsCreateWithoutCommentInput[] | recommend_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutCommentInput | recommend_commentsCreateOrConnectWithoutCommentInput[]
    createMany?: recommend_commentsCreateManyCommentInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_commentsCreateNestedManyWithoutCommentInput = {
    create?: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput> | reported_commentsCreateWithoutCommentInput[] | reported_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutCommentInput | reported_commentsCreateOrConnectWithoutCommentInput[]
    createMany?: reported_commentsCreateManyCommentInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput> | commentsCreateWithoutParentInput[] | commentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParentInput | commentsCreateOrConnectWithoutParentInput[]
    createMany?: commentsCreateManyParentInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type recommend_commentsUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput> | recommend_commentsCreateWithoutCommentInput[] | recommend_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutCommentInput | recommend_commentsCreateOrConnectWithoutCommentInput[]
    createMany?: recommend_commentsCreateManyCommentInputEnvelope
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
  }

  export type reported_commentsUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput> | reported_commentsCreateWithoutCommentInput[] | reported_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutCommentInput | reported_commentsCreateOrConnectWithoutCommentInput[]
    createMany?: reported_commentsCreateManyCommentInputEnvelope
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
  }

  export type incumbentsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<incumbentsCreateWithoutCommentsInput, incumbentsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutCommentsInput
    upsert?: incumbentsUpsertWithoutCommentsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutCommentsInput, incumbentsUpdateWithoutCommentsInput>, incumbentsUncheckedUpdateWithoutCommentsInput>
  }

  export type studentsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<studentsCreateWithoutCommentsInput, studentsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutCommentsInput
    upsert?: studentsUpsertWithoutCommentsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutCommentsInput, studentsUpdateWithoutCommentsInput>, studentsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<commentsCreateWithoutRepliesInput, commentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutRepliesInput
    upsert?: commentsUpsertWithoutRepliesInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutRepliesInput, commentsUpdateWithoutRepliesInput>, commentsUncheckedUpdateWithoutRepliesInput>
  }

  export type commentsUpdateManyWithoutParentNestedInput = {
    create?: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput> | commentsCreateWithoutParentInput[] | commentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParentInput | commentsCreateOrConnectWithoutParentInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutParentInput | commentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: commentsCreateManyParentInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutParentInput | commentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutParentInput | commentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_commentsUpdateManyWithoutCommentNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput> | recommend_commentsCreateWithoutCommentInput[] | recommend_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutCommentInput | recommend_commentsCreateOrConnectWithoutCommentInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutCommentInput | recommend_commentsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: recommend_commentsCreateManyCommentInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutCommentInput | recommend_commentsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutCommentInput | recommend_commentsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_commentsUpdateManyWithoutCommentNestedInput = {
    create?: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput> | reported_commentsCreateWithoutCommentInput[] | reported_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutCommentInput | reported_commentsCreateOrConnectWithoutCommentInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutCommentInput | reported_commentsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: reported_commentsCreateManyCommentInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutCommentInput | reported_commentsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutCommentInput | reported_commentsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput> | commentsCreateWithoutParentInput[] | commentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParentInput | commentsCreateOrConnectWithoutParentInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutParentInput | commentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: commentsCreateManyParentInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutParentInput | commentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutParentInput | commentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput> | recommend_commentsCreateWithoutCommentInput[] | recommend_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: recommend_commentsCreateOrConnectWithoutCommentInput | recommend_commentsCreateOrConnectWithoutCommentInput[]
    upsert?: recommend_commentsUpsertWithWhereUniqueWithoutCommentInput | recommend_commentsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: recommend_commentsCreateManyCommentInputEnvelope
    set?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    disconnect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    delete?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    connect?: recommend_commentsWhereUniqueInput | recommend_commentsWhereUniqueInput[]
    update?: recommend_commentsUpdateWithWhereUniqueWithoutCommentInput | recommend_commentsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: recommend_commentsUpdateManyWithWhereWithoutCommentInput | recommend_commentsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
  }

  export type reported_commentsUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput> | reported_commentsCreateWithoutCommentInput[] | reported_commentsUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: reported_commentsCreateOrConnectWithoutCommentInput | reported_commentsCreateOrConnectWithoutCommentInput[]
    upsert?: reported_commentsUpsertWithWhereUniqueWithoutCommentInput | reported_commentsUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: reported_commentsCreateManyCommentInputEnvelope
    set?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    disconnect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    delete?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    connect?: reported_commentsWhereUniqueInput | reported_commentsWhereUniqueInput[]
    update?: reported_commentsUpdateWithWhereUniqueWithoutCommentInput | reported_commentsUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: reported_commentsUpdateManyWithWhereWithoutCommentInput | reported_commentsUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
  }

  export type incumbentsCreateNestedOneWithoutRecommend_postsInput = {
    create?: XOR<incumbentsCreateWithoutRecommend_postsInput, incumbentsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutRecommend_postsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutRecommend_postsInput = {
    create?: XOR<studentsCreateWithoutRecommend_postsInput, studentsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecommend_postsInput
    connect?: studentsWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutRecommend_postsInput = {
    create?: XOR<postsCreateWithoutRecommend_postsInput, postsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutRecommend_postsInput
    connect?: postsWhereUniqueInput
  }

  export type incumbentsUpdateOneWithoutRecommend_postsNestedInput = {
    create?: XOR<incumbentsCreateWithoutRecommend_postsInput, incumbentsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutRecommend_postsInput
    upsert?: incumbentsUpsertWithoutRecommend_postsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutRecommend_postsInput, incumbentsUpdateWithoutRecommend_postsInput>, incumbentsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type studentsUpdateOneWithoutRecommend_postsNestedInput = {
    create?: XOR<studentsCreateWithoutRecommend_postsInput, studentsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecommend_postsInput
    upsert?: studentsUpsertWithoutRecommend_postsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutRecommend_postsInput, studentsUpdateWithoutRecommend_postsInput>, studentsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type postsUpdateOneRequiredWithoutRecommend_postsNestedInput = {
    create?: XOR<postsCreateWithoutRecommend_postsInput, postsUncheckedCreateWithoutRecommend_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutRecommend_postsInput
    upsert?: postsUpsertWithoutRecommend_postsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutRecommend_postsInput, postsUpdateWithoutRecommend_postsInput>, postsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type incumbentsCreateNestedOneWithoutReported_postsInput = {
    create?: XOR<incumbentsCreateWithoutReported_postsInput, incumbentsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutReported_postsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutReported_postsInput = {
    create?: XOR<studentsCreateWithoutReported_postsInput, studentsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutReported_postsInput
    connect?: studentsWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutReported_postsInput = {
    create?: XOR<postsCreateWithoutReported_postsInput, postsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutReported_postsInput
    connect?: postsWhereUniqueInput
  }

  export type incumbentsUpdateOneWithoutReported_postsNestedInput = {
    create?: XOR<incumbentsCreateWithoutReported_postsInput, incumbentsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutReported_postsInput
    upsert?: incumbentsUpsertWithoutReported_postsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutReported_postsInput, incumbentsUpdateWithoutReported_postsInput>, incumbentsUncheckedUpdateWithoutReported_postsInput>
  }

  export type studentsUpdateOneWithoutReported_postsNestedInput = {
    create?: XOR<studentsCreateWithoutReported_postsInput, studentsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutReported_postsInput
    upsert?: studentsUpsertWithoutReported_postsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutReported_postsInput, studentsUpdateWithoutReported_postsInput>, studentsUncheckedUpdateWithoutReported_postsInput>
  }

  export type postsUpdateOneRequiredWithoutReported_postsNestedInput = {
    create?: XOR<postsCreateWithoutReported_postsInput, postsUncheckedCreateWithoutReported_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutReported_postsInput
    upsert?: postsUpsertWithoutReported_postsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutReported_postsInput, postsUpdateWithoutReported_postsInput>, postsUncheckedUpdateWithoutReported_postsInput>
  }

  export type commentsCreateNestedOneWithoutRecommend_commentsInput = {
    create?: XOR<commentsCreateWithoutRecommend_commentsInput, commentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutRecommend_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type incumbentsCreateNestedOneWithoutRecommend_commentsInput = {
    create?: XOR<incumbentsCreateWithoutRecommend_commentsInput, incumbentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutRecommend_commentsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutRecommend_commentsInput = {
    create?: XOR<studentsCreateWithoutRecommend_commentsInput, studentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecommend_commentsInput
    connect?: studentsWhereUniqueInput
  }

  export type commentsUpdateOneRequiredWithoutRecommend_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutRecommend_commentsInput, commentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutRecommend_commentsInput
    upsert?: commentsUpsertWithoutRecommend_commentsInput
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutRecommend_commentsInput, commentsUpdateWithoutRecommend_commentsInput>, commentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type incumbentsUpdateOneWithoutRecommend_commentsNestedInput = {
    create?: XOR<incumbentsCreateWithoutRecommend_commentsInput, incumbentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutRecommend_commentsInput
    upsert?: incumbentsUpsertWithoutRecommend_commentsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutRecommend_commentsInput, incumbentsUpdateWithoutRecommend_commentsInput>, incumbentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type studentsUpdateOneWithoutRecommend_commentsNestedInput = {
    create?: XOR<studentsCreateWithoutRecommend_commentsInput, studentsUncheckedCreateWithoutRecommend_commentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutRecommend_commentsInput
    upsert?: studentsUpsertWithoutRecommend_commentsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutRecommend_commentsInput, studentsUpdateWithoutRecommend_commentsInput>, studentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type commentsCreateNestedOneWithoutReported_commentsInput = {
    create?: XOR<commentsCreateWithoutReported_commentsInput, commentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutReported_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type incumbentsCreateNestedOneWithoutReported_commentsInput = {
    create?: XOR<incumbentsCreateWithoutReported_commentsInput, incumbentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutReported_commentsInput
    connect?: incumbentsWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutReported_commentsInput = {
    create?: XOR<studentsCreateWithoutReported_commentsInput, studentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutReported_commentsInput
    connect?: studentsWhereUniqueInput
  }

  export type commentsUpdateOneRequiredWithoutReported_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutReported_commentsInput, commentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutReported_commentsInput
    upsert?: commentsUpsertWithoutReported_commentsInput
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutReported_commentsInput, commentsUpdateWithoutReported_commentsInput>, commentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type incumbentsUpdateOneWithoutReported_commentsNestedInput = {
    create?: XOR<incumbentsCreateWithoutReported_commentsInput, incumbentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: incumbentsCreateOrConnectWithoutReported_commentsInput
    upsert?: incumbentsUpsertWithoutReported_commentsInput
    disconnect?: incumbentsWhereInput | boolean
    delete?: incumbentsWhereInput | boolean
    connect?: incumbentsWhereUniqueInput
    update?: XOR<XOR<incumbentsUpdateToOneWithWhereWithoutReported_commentsInput, incumbentsUpdateWithoutReported_commentsInput>, incumbentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type studentsUpdateOneWithoutReported_commentsNestedInput = {
    create?: XOR<studentsCreateWithoutReported_commentsInput, studentsUncheckedCreateWithoutReported_commentsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutReported_commentsInput
    upsert?: studentsUpsertWithoutReported_commentsInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutReported_commentsInput, studentsUpdateWithoutReported_commentsInput>, studentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type incumbents_additionalCreateWithoutIncumbentsInput = {
    image?: string | null
    school?: string | null
    jobDescription?: string | null
    reportedNum?: number
    adviceCount?: number
    estimationCount?: number
    major?: string | null
    companyName?: string | null
    companyWelfare?: string
    companyLocation?: string | null
    updatedDate?: Date | string
  }

  export type incumbents_additionalUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    image?: string | null
    school?: string | null
    jobDescription?: string | null
    reportedNum?: number
    adviceCount?: number
    estimationCount?: number
    major?: string | null
    companyName?: string | null
    companyWelfare?: string
    companyLocation?: string | null
    updatedDate?: Date | string
  }

  export type incumbents_additionalCreateOrConnectWithoutIncumbentsInput = {
    where: incumbents_additionalWhereUniqueInput
    create: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
  }

  export type postsCreateWithoutIncumbentsInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutIncumbentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type postsCreateManyIncumbentsInputEnvelope = {
    data: postsCreateManyIncumbentsInput | postsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutIncumbentsInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutIncumbentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type commentsCreateManyIncumbentsInputEnvelope = {
    data: commentsCreateManyIncumbentsInput | commentsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type recommend_postsCreateWithoutIncumbentsInput = {
    createdDate?: Date | string
    students?: studentsCreateNestedOneWithoutRecommend_postsInput
    post: postsCreateNestedOneWithoutRecommend_postsInput
  }

  export type recommend_postsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_postsCreateOrConnectWithoutIncumbentsInput = {
    where: recommend_postsWhereUniqueInput
    create: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type recommend_postsCreateManyIncumbentsInputEnvelope = {
    data: recommend_postsCreateManyIncumbentsInput | recommend_postsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type recommend_commentsCreateWithoutIncumbentsInput = {
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutRecommend_commentsInput
    students?: studentsCreateNestedOneWithoutRecommend_commentsInput
  }

  export type recommend_commentsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    commendId: number
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsCreateOrConnectWithoutIncumbentsInput = {
    where: recommend_commentsWhereUniqueInput
    create: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type recommend_commentsCreateManyIncumbentsInputEnvelope = {
    data: recommend_commentsCreateManyIncumbentsInput | recommend_commentsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type reported_postsCreateWithoutIncumbentsInput = {
    reason: string
    createdDate?: Date | string
    students?: studentsCreateNestedOneWithoutReported_postsInput
    post: postsCreateNestedOneWithoutReported_postsInput
  }

  export type reported_postsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_postsCreateOrConnectWithoutIncumbentsInput = {
    where: reported_postsWhereUniqueInput
    create: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type reported_postsCreateManyIncumbentsInputEnvelope = {
    data: reported_postsCreateManyIncumbentsInput | reported_postsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type reported_commentsCreateWithoutIncumbentsInput = {
    reason: string
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutReported_commentsInput
    students?: studentsCreateNestedOneWithoutReported_commentsInput
  }

  export type reported_commentsUncheckedCreateWithoutIncumbentsInput = {
    id?: number
    commendId: number
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsCreateOrConnectWithoutIncumbentsInput = {
    where: reported_commentsWhereUniqueInput
    create: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type reported_commentsCreateManyIncumbentsInputEnvelope = {
    data: reported_commentsCreateManyIncumbentsInput | reported_commentsCreateManyIncumbentsInput[]
    skipDuplicates?: boolean
  }

  export type incumbents_additionalUpsertWithoutIncumbentsInput = {
    update: XOR<incumbents_additionalUpdateWithoutIncumbentsInput, incumbents_additionalUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<incumbents_additionalCreateWithoutIncumbentsInput, incumbents_additionalUncheckedCreateWithoutIncumbentsInput>
    where?: incumbents_additionalWhereInput
  }

  export type incumbents_additionalUpdateToOneWithWhereWithoutIncumbentsInput = {
    where?: incumbents_additionalWhereInput
    data: XOR<incumbents_additionalUpdateWithoutIncumbentsInput, incumbents_additionalUncheckedUpdateWithoutIncumbentsInput>
  }

  export type incumbents_additionalUpdateWithoutIncumbentsInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incumbents_additionalUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    major?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWelfare?: StringFieldUpdateOperationsInput | string
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutIncumbentsInput, postsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<postsCreateWithoutIncumbentsInput, postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type postsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutIncumbentsInput, postsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type postsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    incumbentId?: IntNullableFilter<"posts"> | number | null
    studentId?: IntNullableFilter<"posts"> | number | null
    categoryId?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    view?: IntFilter<"posts"> | number
    recommend?: IntFilter<"posts"> | number
    reported?: IntFilter<"posts"> | number
    createdDate?: DateTimeFilter<"posts"> | Date | string
    updatedDate?: DateTimeFilter<"posts"> | Date | string
  }

  export type commentsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutIncumbentsInput, commentsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<commentsCreateWithoutIncumbentsInput, commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutIncumbentsInput, commentsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    postId?: IntFilter<"comments"> | number
    incumbentId?: IntNullableFilter<"comments"> | number | null
    studentId?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    parentCommentId?: IntNullableFilter<"comments"> | number | null
    recommend?: IntFilter<"comments"> | number
    reported?: IntFilter<"comments"> | number
    createdDate?: DateTimeFilter<"comments"> | Date | string
    updatedDate?: DateTimeFilter<"comments"> | Date | string
  }

  export type recommend_postsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: recommend_postsWhereUniqueInput
    update: XOR<recommend_postsUpdateWithoutIncumbentsInput, recommend_postsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<recommend_postsCreateWithoutIncumbentsInput, recommend_postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type recommend_postsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: recommend_postsWhereUniqueInput
    data: XOR<recommend_postsUpdateWithoutIncumbentsInput, recommend_postsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type recommend_postsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: recommend_postsScalarWhereInput
    data: XOR<recommend_postsUpdateManyMutationInput, recommend_postsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type recommend_postsScalarWhereInput = {
    AND?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
    OR?: recommend_postsScalarWhereInput[]
    NOT?: recommend_postsScalarWhereInput | recommend_postsScalarWhereInput[]
    id?: IntFilter<"recommend_posts"> | number
    postId?: IntFilter<"recommend_posts"> | number
    incumbentId?: IntNullableFilter<"recommend_posts"> | number | null
    studentId?: IntNullableFilter<"recommend_posts"> | number | null
    createdDate?: DateTimeFilter<"recommend_posts"> | Date | string
  }

  export type recommend_commentsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: recommend_commentsWhereUniqueInput
    update: XOR<recommend_commentsUpdateWithoutIncumbentsInput, recommend_commentsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<recommend_commentsCreateWithoutIncumbentsInput, recommend_commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type recommend_commentsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: recommend_commentsWhereUniqueInput
    data: XOR<recommend_commentsUpdateWithoutIncumbentsInput, recommend_commentsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type recommend_commentsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: recommend_commentsScalarWhereInput
    data: XOR<recommend_commentsUpdateManyMutationInput, recommend_commentsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type recommend_commentsScalarWhereInput = {
    AND?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
    OR?: recommend_commentsScalarWhereInput[]
    NOT?: recommend_commentsScalarWhereInput | recommend_commentsScalarWhereInput[]
    id?: IntFilter<"recommend_comments"> | number
    commendId?: IntFilter<"recommend_comments"> | number
    incumbentId?: IntNullableFilter<"recommend_comments"> | number | null
    studentId?: IntNullableFilter<"recommend_comments"> | number | null
    createdDate?: DateTimeFilter<"recommend_comments"> | Date | string
  }

  export type reported_postsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: reported_postsWhereUniqueInput
    update: XOR<reported_postsUpdateWithoutIncumbentsInput, reported_postsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<reported_postsCreateWithoutIncumbentsInput, reported_postsUncheckedCreateWithoutIncumbentsInput>
  }

  export type reported_postsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: reported_postsWhereUniqueInput
    data: XOR<reported_postsUpdateWithoutIncumbentsInput, reported_postsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type reported_postsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: reported_postsScalarWhereInput
    data: XOR<reported_postsUpdateManyMutationInput, reported_postsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type reported_postsScalarWhereInput = {
    AND?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
    OR?: reported_postsScalarWhereInput[]
    NOT?: reported_postsScalarWhereInput | reported_postsScalarWhereInput[]
    id?: IntFilter<"reported_posts"> | number
    postId?: IntFilter<"reported_posts"> | number
    incumbentId?: IntNullableFilter<"reported_posts"> | number | null
    studentId?: IntNullableFilter<"reported_posts"> | number | null
    reason?: StringFilter<"reported_posts"> | string
    createdDate?: DateTimeFilter<"reported_posts"> | Date | string
  }

  export type reported_commentsUpsertWithWhereUniqueWithoutIncumbentsInput = {
    where: reported_commentsWhereUniqueInput
    update: XOR<reported_commentsUpdateWithoutIncumbentsInput, reported_commentsUncheckedUpdateWithoutIncumbentsInput>
    create: XOR<reported_commentsCreateWithoutIncumbentsInput, reported_commentsUncheckedCreateWithoutIncumbentsInput>
  }

  export type reported_commentsUpdateWithWhereUniqueWithoutIncumbentsInput = {
    where: reported_commentsWhereUniqueInput
    data: XOR<reported_commentsUpdateWithoutIncumbentsInput, reported_commentsUncheckedUpdateWithoutIncumbentsInput>
  }

  export type reported_commentsUpdateManyWithWhereWithoutIncumbentsInput = {
    where: reported_commentsScalarWhereInput
    data: XOR<reported_commentsUpdateManyMutationInput, reported_commentsUncheckedUpdateManyWithoutIncumbentsInput>
  }

  export type reported_commentsScalarWhereInput = {
    AND?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
    OR?: reported_commentsScalarWhereInput[]
    NOT?: reported_commentsScalarWhereInput | reported_commentsScalarWhereInput[]
    id?: IntFilter<"reported_comments"> | number
    commendId?: IntFilter<"reported_comments"> | number
    incumbentId?: IntNullableFilter<"reported_comments"> | number | null
    studentId?: IntNullableFilter<"reported_comments"> | number | null
    reason?: StringFilter<"reported_comments"> | string
    createdDate?: DateTimeFilter<"reported_comments"> | Date | string
  }

  export type incumbentsCreateWithoutIncumbent_additionalInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutIncumbent_additionalInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutIncumbent_additionalInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutIncumbent_additionalInput, incumbentsUncheckedCreateWithoutIncumbent_additionalInput>
  }

  export type incumbentsUpsertWithoutIncumbent_additionalInput = {
    update: XOR<incumbentsUpdateWithoutIncumbent_additionalInput, incumbentsUncheckedUpdateWithoutIncumbent_additionalInput>
    create: XOR<incumbentsCreateWithoutIncumbent_additionalInput, incumbentsUncheckedCreateWithoutIncumbent_additionalInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutIncumbent_additionalInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutIncumbent_additionalInput, incumbentsUncheckedUpdateWithoutIncumbent_additionalInput>
  }

  export type incumbentsUpdateWithoutIncumbent_additionalInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutIncumbent_additionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type students_additionalCreateWithoutStudentsInput = {
    image?: string | null
    major?: string | null
    school?: string | null
    reportedNum?: number
    totalGrade?: number | null
    adviceCount?: number
    estimationCount?: number
    wishJobDescription?: string | null
    wishCompanyName?: string | null
    wishCompanyWelfare?: string | null
    wishCompanyLocation?: string | null
    updatedDate?: Date | string
  }

  export type students_additionalUncheckedCreateWithoutStudentsInput = {
    id?: number
    image?: string | null
    major?: string | null
    school?: string | null
    reportedNum?: number
    totalGrade?: number | null
    adviceCount?: number
    estimationCount?: number
    wishJobDescription?: string | null
    wishCompanyName?: string | null
    wishCompanyWelfare?: string | null
    wishCompanyLocation?: string | null
    updatedDate?: Date | string
  }

  export type students_additionalCreateOrConnectWithoutStudentsInput = {
    where: students_additionalWhereUniqueInput
    create: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
  }

  export type postsCreateWithoutStudentsInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutStudentsInput = {
    id?: number
    incumbentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutStudentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput>
  }

  export type postsCreateManyStudentsInputEnvelope = {
    data: postsCreateManyStudentsInput | postsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutStudentsInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutStudentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput>
  }

  export type commentsCreateManyStudentsInputEnvelope = {
    data: commentsCreateManyStudentsInput | commentsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type recommend_postsCreateWithoutStudentsInput = {
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_postsInput
    post: postsCreateNestedOneWithoutRecommend_postsInput
  }

  export type recommend_postsUncheckedCreateWithoutStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_postsCreateOrConnectWithoutStudentsInput = {
    where: recommend_postsWhereUniqueInput
    create: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput>
  }

  export type recommend_postsCreateManyStudentsInputEnvelope = {
    data: recommend_postsCreateManyStudentsInput | recommend_postsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type recommend_commentsCreateWithoutStudentsInput = {
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutRecommend_commentsInput
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_commentsInput
  }

  export type recommend_commentsUncheckedCreateWithoutStudentsInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsCreateOrConnectWithoutStudentsInput = {
    where: recommend_commentsWhereUniqueInput
    create: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput>
  }

  export type recommend_commentsCreateManyStudentsInputEnvelope = {
    data: recommend_commentsCreateManyStudentsInput | recommend_commentsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type reported_postsCreateWithoutStudentsInput = {
    reason: string
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutReported_postsInput
    post: postsCreateNestedOneWithoutReported_postsInput
  }

  export type reported_postsUncheckedCreateWithoutStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_postsCreateOrConnectWithoutStudentsInput = {
    where: reported_postsWhereUniqueInput
    create: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput>
  }

  export type reported_postsCreateManyStudentsInputEnvelope = {
    data: reported_postsCreateManyStudentsInput | reported_postsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type reported_commentsCreateWithoutStudentsInput = {
    reason: string
    createdDate?: Date | string
    comment: commentsCreateNestedOneWithoutReported_commentsInput
    incumbents?: incumbentsCreateNestedOneWithoutReported_commentsInput
  }

  export type reported_commentsUncheckedCreateWithoutStudentsInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsCreateOrConnectWithoutStudentsInput = {
    where: reported_commentsWhereUniqueInput
    create: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput>
  }

  export type reported_commentsCreateManyStudentsInputEnvelope = {
    data: reported_commentsCreateManyStudentsInput | reported_commentsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type students_additionalUpsertWithoutStudentsInput = {
    update: XOR<students_additionalUpdateWithoutStudentsInput, students_additionalUncheckedUpdateWithoutStudentsInput>
    create: XOR<students_additionalCreateWithoutStudentsInput, students_additionalUncheckedCreateWithoutStudentsInput>
    where?: students_additionalWhereInput
  }

  export type students_additionalUpdateToOneWithWhereWithoutStudentsInput = {
    where?: students_additionalWhereInput
    data: XOR<students_additionalUpdateWithoutStudentsInput, students_additionalUncheckedUpdateWithoutStudentsInput>
  }

  export type students_additionalUpdateWithoutStudentsInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type students_additionalUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    reportedNum?: IntFieldUpdateOperationsInput | number
    totalGrade?: NullableFloatFieldUpdateOperationsInput | number | null
    adviceCount?: IntFieldUpdateOperationsInput | number
    estimationCount?: FloatFieldUpdateOperationsInput | number
    wishJobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyWelfare?: NullableStringFieldUpdateOperationsInput | string | null
    wishCompanyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutStudentsInput, postsUncheckedUpdateWithoutStudentsInput>
    create: XOR<postsCreateWithoutStudentsInput, postsUncheckedCreateWithoutStudentsInput>
  }

  export type postsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutStudentsInput, postsUncheckedUpdateWithoutStudentsInput>
  }

  export type postsUpdateManyWithWhereWithoutStudentsInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutStudentsInput, commentsUncheckedUpdateWithoutStudentsInput>
    create: XOR<commentsCreateWithoutStudentsInput, commentsUncheckedCreateWithoutStudentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutStudentsInput, commentsUncheckedUpdateWithoutStudentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutStudentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type recommend_postsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: recommend_postsWhereUniqueInput
    update: XOR<recommend_postsUpdateWithoutStudentsInput, recommend_postsUncheckedUpdateWithoutStudentsInput>
    create: XOR<recommend_postsCreateWithoutStudentsInput, recommend_postsUncheckedCreateWithoutStudentsInput>
  }

  export type recommend_postsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: recommend_postsWhereUniqueInput
    data: XOR<recommend_postsUpdateWithoutStudentsInput, recommend_postsUncheckedUpdateWithoutStudentsInput>
  }

  export type recommend_postsUpdateManyWithWhereWithoutStudentsInput = {
    where: recommend_postsScalarWhereInput
    data: XOR<recommend_postsUpdateManyMutationInput, recommend_postsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type recommend_commentsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: recommend_commentsWhereUniqueInput
    update: XOR<recommend_commentsUpdateWithoutStudentsInput, recommend_commentsUncheckedUpdateWithoutStudentsInput>
    create: XOR<recommend_commentsCreateWithoutStudentsInput, recommend_commentsUncheckedCreateWithoutStudentsInput>
  }

  export type recommend_commentsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: recommend_commentsWhereUniqueInput
    data: XOR<recommend_commentsUpdateWithoutStudentsInput, recommend_commentsUncheckedUpdateWithoutStudentsInput>
  }

  export type recommend_commentsUpdateManyWithWhereWithoutStudentsInput = {
    where: recommend_commentsScalarWhereInput
    data: XOR<recommend_commentsUpdateManyMutationInput, recommend_commentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type reported_postsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: reported_postsWhereUniqueInput
    update: XOR<reported_postsUpdateWithoutStudentsInput, reported_postsUncheckedUpdateWithoutStudentsInput>
    create: XOR<reported_postsCreateWithoutStudentsInput, reported_postsUncheckedCreateWithoutStudentsInput>
  }

  export type reported_postsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: reported_postsWhereUniqueInput
    data: XOR<reported_postsUpdateWithoutStudentsInput, reported_postsUncheckedUpdateWithoutStudentsInput>
  }

  export type reported_postsUpdateManyWithWhereWithoutStudentsInput = {
    where: reported_postsScalarWhereInput
    data: XOR<reported_postsUpdateManyMutationInput, reported_postsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type reported_commentsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: reported_commentsWhereUniqueInput
    update: XOR<reported_commentsUpdateWithoutStudentsInput, reported_commentsUncheckedUpdateWithoutStudentsInput>
    create: XOR<reported_commentsCreateWithoutStudentsInput, reported_commentsUncheckedCreateWithoutStudentsInput>
  }

  export type reported_commentsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: reported_commentsWhereUniqueInput
    data: XOR<reported_commentsUpdateWithoutStudentsInput, reported_commentsUncheckedUpdateWithoutStudentsInput>
  }

  export type reported_commentsUpdateManyWithWhereWithoutStudentsInput = {
    where: reported_commentsScalarWhereInput
    data: XOR<reported_commentsUpdateManyMutationInput, reported_commentsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type studentsCreateWithoutStudent_additionalInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutStudent_additionalInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutStudent_additionalInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutStudent_additionalInput, studentsUncheckedCreateWithoutStudent_additionalInput>
  }

  export type studentsUpsertWithoutStudent_additionalInput = {
    update: XOR<studentsUpdateWithoutStudent_additionalInput, studentsUncheckedUpdateWithoutStudent_additionalInput>
    create: XOR<studentsCreateWithoutStudent_additionalInput, studentsUncheckedCreateWithoutStudent_additionalInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutStudent_additionalInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutStudent_additionalInput, studentsUncheckedUpdateWithoutStudent_additionalInput>
  }

  export type studentsUpdateWithoutStudent_additionalInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutStudent_additionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type postsCreateWithoutCategoriesInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsCreateManyCategoriesInputEnvelope = {
    data: postsCreateManyCategoriesInput | postsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type postsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
  }

  export type postsUpdateManyWithWhereWithoutCategoriesInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoryCreateWithoutPostsInput = {
    name: string
  }

  export type categoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
  }

  export type categoryCreateOrConnectWithoutPostsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutPostsInput, categoryUncheckedCreateWithoutPostsInput>
  }

  export type incumbentsCreateWithoutPostsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutPostsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutPostsInput, incumbentsUncheckedCreateWithoutPostsInput>
  }

  export type studentsCreateWithoutPostsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutPostsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutPostsInput, studentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsCreateWithoutPostInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutPostInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput>
  }

  export type commentsCreateManyPostInputEnvelope = {
    data: commentsCreateManyPostInput | commentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type recommend_postsCreateWithoutPostInput = {
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_postsInput
    students?: studentsCreateNestedOneWithoutRecommend_postsInput
  }

  export type recommend_postsUncheckedCreateWithoutPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_postsCreateOrConnectWithoutPostInput = {
    where: recommend_postsWhereUniqueInput
    create: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput>
  }

  export type recommend_postsCreateManyPostInputEnvelope = {
    data: recommend_postsCreateManyPostInput | recommend_postsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type reported_postsCreateWithoutPostInput = {
    reason: string
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutReported_postsInput
    students?: studentsCreateNestedOneWithoutReported_postsInput
  }

  export type reported_postsUncheckedCreateWithoutPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_postsCreateOrConnectWithoutPostInput = {
    where: reported_postsWhereUniqueInput
    create: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput>
  }

  export type reported_postsCreateManyPostInputEnvelope = {
    data: reported_postsCreateManyPostInput | reported_postsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutPostsInput = {
    update: XOR<categoryUpdateWithoutPostsInput, categoryUncheckedUpdateWithoutPostsInput>
    create: XOR<categoryCreateWithoutPostsInput, categoryUncheckedCreateWithoutPostsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutPostsInput, categoryUncheckedUpdateWithoutPostsInput>
  }

  export type categoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type incumbentsUpsertWithoutPostsInput = {
    update: XOR<incumbentsUpdateWithoutPostsInput, incumbentsUncheckedUpdateWithoutPostsInput>
    create: XOR<incumbentsCreateWithoutPostsInput, incumbentsUncheckedCreateWithoutPostsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutPostsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutPostsInput, incumbentsUncheckedUpdateWithoutPostsInput>
  }

  export type incumbentsUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutPostsInput = {
    update: XOR<studentsUpdateWithoutPostsInput, studentsUncheckedUpdateWithoutPostsInput>
    create: XOR<studentsCreateWithoutPostsInput, studentsUncheckedCreateWithoutPostsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutPostsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutPostsInput, studentsUncheckedUpdateWithoutPostsInput>
  }

  export type studentsUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutPostInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPostInput, commentsUncheckedUpdateWithoutPostInput>
    create: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPostInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPostInput, commentsUncheckedUpdateWithoutPostInput>
  }

  export type commentsUpdateManyWithWhereWithoutPostInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPostInput>
  }

  export type recommend_postsUpsertWithWhereUniqueWithoutPostInput = {
    where: recommend_postsWhereUniqueInput
    update: XOR<recommend_postsUpdateWithoutPostInput, recommend_postsUncheckedUpdateWithoutPostInput>
    create: XOR<recommend_postsCreateWithoutPostInput, recommend_postsUncheckedCreateWithoutPostInput>
  }

  export type recommend_postsUpdateWithWhereUniqueWithoutPostInput = {
    where: recommend_postsWhereUniqueInput
    data: XOR<recommend_postsUpdateWithoutPostInput, recommend_postsUncheckedUpdateWithoutPostInput>
  }

  export type recommend_postsUpdateManyWithWhereWithoutPostInput = {
    where: recommend_postsScalarWhereInput
    data: XOR<recommend_postsUpdateManyMutationInput, recommend_postsUncheckedUpdateManyWithoutPostInput>
  }

  export type reported_postsUpsertWithWhereUniqueWithoutPostInput = {
    where: reported_postsWhereUniqueInput
    update: XOR<reported_postsUpdateWithoutPostInput, reported_postsUncheckedUpdateWithoutPostInput>
    create: XOR<reported_postsCreateWithoutPostInput, reported_postsUncheckedCreateWithoutPostInput>
  }

  export type reported_postsUpdateWithWhereUniqueWithoutPostInput = {
    where: reported_postsWhereUniqueInput
    data: XOR<reported_postsUpdateWithoutPostInput, reported_postsUncheckedUpdateWithoutPostInput>
  }

  export type reported_postsUpdateManyWithWhereWithoutPostInput = {
    where: reported_postsScalarWhereInput
    data: XOR<reported_postsUpdateManyMutationInput, reported_postsUncheckedUpdateManyWithoutPostInput>
  }

  export type incumbentsCreateWithoutCommentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutCommentsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutCommentsInput, incumbentsUncheckedCreateWithoutCommentsInput>
  }

  export type studentsCreateWithoutCommentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutCommentsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutCommentsInput, studentsUncheckedCreateWithoutCommentsInput>
  }

  export type postsCreateWithoutCommentsInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateWithoutRepliesInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutRepliesInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutRepliesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutRepliesInput, commentsUncheckedCreateWithoutRepliesInput>
  }

  export type commentsCreateWithoutParentInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutParentInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutParentInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput>
  }

  export type commentsCreateManyParentInputEnvelope = {
    data: commentsCreateManyParentInput | commentsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type recommend_commentsCreateWithoutCommentInput = {
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutRecommend_commentsInput
    students?: studentsCreateNestedOneWithoutRecommend_commentsInput
  }

  export type recommend_commentsUncheckedCreateWithoutCommentInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsCreateOrConnectWithoutCommentInput = {
    where: recommend_commentsWhereUniqueInput
    create: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput>
  }

  export type recommend_commentsCreateManyCommentInputEnvelope = {
    data: recommend_commentsCreateManyCommentInput | recommend_commentsCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type reported_commentsCreateWithoutCommentInput = {
    reason: string
    createdDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutReported_commentsInput
    students?: studentsCreateNestedOneWithoutReported_commentsInput
  }

  export type reported_commentsUncheckedCreateWithoutCommentInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsCreateOrConnectWithoutCommentInput = {
    where: reported_commentsWhereUniqueInput
    create: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput>
  }

  export type reported_commentsCreateManyCommentInputEnvelope = {
    data: reported_commentsCreateManyCommentInput | reported_commentsCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type incumbentsUpsertWithoutCommentsInput = {
    update: XOR<incumbentsUpdateWithoutCommentsInput, incumbentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<incumbentsCreateWithoutCommentsInput, incumbentsUncheckedCreateWithoutCommentsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutCommentsInput, incumbentsUncheckedUpdateWithoutCommentsInput>
  }

  export type incumbentsUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutCommentsInput = {
    update: XOR<studentsUpdateWithoutCommentsInput, studentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<studentsCreateWithoutCommentsInput, studentsUncheckedCreateWithoutCommentsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutCommentsInput, studentsUncheckedUpdateWithoutCommentsInput>
  }

  export type studentsUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type commentsUpsertWithoutRepliesInput = {
    update: XOR<commentsUpdateWithoutRepliesInput, commentsUncheckedUpdateWithoutRepliesInput>
    create: XOR<commentsCreateWithoutRepliesInput, commentsUncheckedCreateWithoutRepliesInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutRepliesInput, commentsUncheckedUpdateWithoutRepliesInput>
  }

  export type commentsUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutParentInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutParentInput, commentsUncheckedUpdateWithoutParentInput>
    create: XOR<commentsCreateWithoutParentInput, commentsUncheckedCreateWithoutParentInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutParentInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutParentInput, commentsUncheckedUpdateWithoutParentInput>
  }

  export type commentsUpdateManyWithWhereWithoutParentInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutParentInput>
  }

  export type recommend_commentsUpsertWithWhereUniqueWithoutCommentInput = {
    where: recommend_commentsWhereUniqueInput
    update: XOR<recommend_commentsUpdateWithoutCommentInput, recommend_commentsUncheckedUpdateWithoutCommentInput>
    create: XOR<recommend_commentsCreateWithoutCommentInput, recommend_commentsUncheckedCreateWithoutCommentInput>
  }

  export type recommend_commentsUpdateWithWhereUniqueWithoutCommentInput = {
    where: recommend_commentsWhereUniqueInput
    data: XOR<recommend_commentsUpdateWithoutCommentInput, recommend_commentsUncheckedUpdateWithoutCommentInput>
  }

  export type recommend_commentsUpdateManyWithWhereWithoutCommentInput = {
    where: recommend_commentsScalarWhereInput
    data: XOR<recommend_commentsUpdateManyMutationInput, recommend_commentsUncheckedUpdateManyWithoutCommentInput>
  }

  export type reported_commentsUpsertWithWhereUniqueWithoutCommentInput = {
    where: reported_commentsWhereUniqueInput
    update: XOR<reported_commentsUpdateWithoutCommentInput, reported_commentsUncheckedUpdateWithoutCommentInput>
    create: XOR<reported_commentsCreateWithoutCommentInput, reported_commentsUncheckedCreateWithoutCommentInput>
  }

  export type reported_commentsUpdateWithWhereUniqueWithoutCommentInput = {
    where: reported_commentsWhereUniqueInput
    data: XOR<reported_commentsUpdateWithoutCommentInput, reported_commentsUncheckedUpdateWithoutCommentInput>
  }

  export type reported_commentsUpdateManyWithWhereWithoutCommentInput = {
    where: reported_commentsScalarWhereInput
    data: XOR<reported_commentsUpdateManyMutationInput, reported_commentsUncheckedUpdateManyWithoutCommentInput>
  }

  export type incumbentsCreateWithoutRecommend_postsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutRecommend_postsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutRecommend_postsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutRecommend_postsInput, incumbentsUncheckedCreateWithoutRecommend_postsInput>
  }

  export type studentsCreateWithoutRecommend_postsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutRecommend_postsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutRecommend_postsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutRecommend_postsInput, studentsUncheckedCreateWithoutRecommend_postsInput>
  }

  export type postsCreateWithoutRecommend_postsInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutRecommend_postsInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutRecommend_postsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutRecommend_postsInput, postsUncheckedCreateWithoutRecommend_postsInput>
  }

  export type incumbentsUpsertWithoutRecommend_postsInput = {
    update: XOR<incumbentsUpdateWithoutRecommend_postsInput, incumbentsUncheckedUpdateWithoutRecommend_postsInput>
    create: XOR<incumbentsCreateWithoutRecommend_postsInput, incumbentsUncheckedCreateWithoutRecommend_postsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutRecommend_postsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutRecommend_postsInput, incumbentsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type incumbentsUpdateWithoutRecommend_postsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutRecommend_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutRecommend_postsInput = {
    update: XOR<studentsUpdateWithoutRecommend_postsInput, studentsUncheckedUpdateWithoutRecommend_postsInput>
    create: XOR<studentsCreateWithoutRecommend_postsInput, studentsUncheckedCreateWithoutRecommend_postsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutRecommend_postsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutRecommend_postsInput, studentsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type studentsUpdateWithoutRecommend_postsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutRecommend_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type postsUpsertWithoutRecommend_postsInput = {
    update: XOR<postsUpdateWithoutRecommend_postsInput, postsUncheckedUpdateWithoutRecommend_postsInput>
    create: XOR<postsCreateWithoutRecommend_postsInput, postsUncheckedCreateWithoutRecommend_postsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutRecommend_postsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutRecommend_postsInput, postsUncheckedUpdateWithoutRecommend_postsInput>
  }

  export type postsUpdateWithoutRecommend_postsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutRecommend_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type incumbentsCreateWithoutReported_postsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutReported_postsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutReported_postsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutReported_postsInput, incumbentsUncheckedCreateWithoutReported_postsInput>
  }

  export type studentsCreateWithoutReported_postsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutReported_postsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutReported_postsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutReported_postsInput, studentsUncheckedCreateWithoutReported_postsInput>
  }

  export type postsCreateWithoutReported_postsInput = {
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    categories?: categoryCreateNestedOneWithoutPostsInput
    incumbents?: incumbentsCreateNestedOneWithoutPostsInput
    students?: studentsCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutReported_postsInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutReported_postsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutReported_postsInput, postsUncheckedCreateWithoutReported_postsInput>
  }

  export type incumbentsUpsertWithoutReported_postsInput = {
    update: XOR<incumbentsUpdateWithoutReported_postsInput, incumbentsUncheckedUpdateWithoutReported_postsInput>
    create: XOR<incumbentsCreateWithoutReported_postsInput, incumbentsUncheckedCreateWithoutReported_postsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutReported_postsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutReported_postsInput, incumbentsUncheckedUpdateWithoutReported_postsInput>
  }

  export type incumbentsUpdateWithoutReported_postsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutReported_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutReported_postsInput = {
    update: XOR<studentsUpdateWithoutReported_postsInput, studentsUncheckedUpdateWithoutReported_postsInput>
    create: XOR<studentsCreateWithoutReported_postsInput, studentsUncheckedCreateWithoutReported_postsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutReported_postsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutReported_postsInput, studentsUncheckedUpdateWithoutReported_postsInput>
  }

  export type studentsUpdateWithoutReported_postsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutReported_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type postsUpsertWithoutReported_postsInput = {
    update: XOR<postsUpdateWithoutReported_postsInput, postsUncheckedUpdateWithoutReported_postsInput>
    create: XOR<postsCreateWithoutReported_postsInput, postsUncheckedCreateWithoutReported_postsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutReported_postsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutReported_postsInput, postsUncheckedUpdateWithoutReported_postsInput>
  }

  export type postsUpdateWithoutReported_postsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutReported_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type commentsCreateWithoutRecommend_commentsInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    reported_comments?: reported_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutRecommend_commentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutRecommend_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutRecommend_commentsInput, commentsUncheckedCreateWithoutRecommend_commentsInput>
  }

  export type incumbentsCreateWithoutRecommend_commentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutRecommend_commentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutRecommend_commentsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutRecommend_commentsInput, incumbentsUncheckedCreateWithoutRecommend_commentsInput>
  }

  export type studentsCreateWithoutRecommend_commentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutRecommend_commentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
    reported_comments?: reported_commentsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutRecommend_commentsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutRecommend_commentsInput, studentsUncheckedCreateWithoutRecommend_commentsInput>
  }

  export type commentsUpsertWithoutRecommend_commentsInput = {
    update: XOR<commentsUpdateWithoutRecommend_commentsInput, commentsUncheckedUpdateWithoutRecommend_commentsInput>
    create: XOR<commentsCreateWithoutRecommend_commentsInput, commentsUncheckedCreateWithoutRecommend_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutRecommend_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutRecommend_commentsInput, commentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type commentsUpdateWithoutRecommend_commentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutRecommend_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type incumbentsUpsertWithoutRecommend_commentsInput = {
    update: XOR<incumbentsUpdateWithoutRecommend_commentsInput, incumbentsUncheckedUpdateWithoutRecommend_commentsInput>
    create: XOR<incumbentsCreateWithoutRecommend_commentsInput, incumbentsUncheckedCreateWithoutRecommend_commentsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutRecommend_commentsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutRecommend_commentsInput, incumbentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type incumbentsUpdateWithoutRecommend_commentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutRecommend_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutRecommend_commentsInput = {
    update: XOR<studentsUpdateWithoutRecommend_commentsInput, studentsUncheckedUpdateWithoutRecommend_commentsInput>
    create: XOR<studentsCreateWithoutRecommend_commentsInput, studentsUncheckedCreateWithoutRecommend_commentsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutRecommend_commentsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutRecommend_commentsInput, studentsUncheckedUpdateWithoutRecommend_commentsInput>
  }

  export type studentsUpdateWithoutRecommend_commentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutRecommend_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type commentsCreateWithoutReported_commentsInput = {
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    incumbents?: incumbentsCreateNestedOneWithoutCommentsInput
    students?: studentsCreateNestedOneWithoutCommentsInput
    post: postsCreateNestedOneWithoutCommentsInput
    parent?: commentsCreateNestedOneWithoutRepliesInput
    replies?: commentsCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutReported_commentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
    replies?: commentsUncheckedCreateNestedManyWithoutParentInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutReported_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutReported_commentsInput, commentsUncheckedCreateWithoutReported_commentsInput>
  }

  export type incumbentsCreateWithoutReported_commentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalCreateNestedOneWithoutIncumbentsInput
    posts?: postsCreateNestedManyWithoutIncumbentsInput
    comments?: commentsCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsUncheckedCreateWithoutReported_commentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    incumbent_additional?: incumbents_additionalUncheckedCreateNestedOneWithoutIncumbentsInput
    posts?: postsUncheckedCreateNestedManyWithoutIncumbentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutIncumbentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutIncumbentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutIncumbentsInput
  }

  export type incumbentsCreateOrConnectWithoutReported_commentsInput = {
    where: incumbentsWhereUniqueInput
    create: XOR<incumbentsCreateWithoutReported_commentsInput, incumbentsUncheckedCreateWithoutReported_commentsInput>
  }

  export type studentsCreateWithoutReported_commentsInput = {
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalCreateNestedOneWithoutStudentsInput
    posts?: postsCreateNestedManyWithoutStudentsInput
    comments?: commentsCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsCreateNestedManyWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutReported_commentsInput = {
    id?: number
    email: string
    password: string
    name: string
    age: number
    gender: $Enums.Gender
    createdDate?: Date | string
    student_additional?: students_additionalUncheckedCreateNestedOneWithoutStudentsInput
    posts?: postsUncheckedCreateNestedManyWithoutStudentsInput
    comments?: commentsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_posts?: recommend_postsUncheckedCreateNestedManyWithoutStudentsInput
    recommend_comments?: recommend_commentsUncheckedCreateNestedManyWithoutStudentsInput
    reported_posts?: reported_postsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutReported_commentsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutReported_commentsInput, studentsUncheckedCreateWithoutReported_commentsInput>
  }

  export type commentsUpsertWithoutReported_commentsInput = {
    update: XOR<commentsUpdateWithoutReported_commentsInput, commentsUncheckedUpdateWithoutReported_commentsInput>
    create: XOR<commentsCreateWithoutReported_commentsInput, commentsUncheckedCreateWithoutReported_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutReported_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutReported_commentsInput, commentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type commentsUpdateWithoutReported_commentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutReported_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type incumbentsUpsertWithoutReported_commentsInput = {
    update: XOR<incumbentsUpdateWithoutReported_commentsInput, incumbentsUncheckedUpdateWithoutReported_commentsInput>
    create: XOR<incumbentsCreateWithoutReported_commentsInput, incumbentsUncheckedCreateWithoutReported_commentsInput>
    where?: incumbentsWhereInput
  }

  export type incumbentsUpdateToOneWithWhereWithoutReported_commentsInput = {
    where?: incumbentsWhereInput
    data: XOR<incumbentsUpdateWithoutReported_commentsInput, incumbentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type incumbentsUpdateWithoutReported_commentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutIncumbentsNestedInput
  }

  export type incumbentsUncheckedUpdateWithoutReported_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbent_additional?: incumbents_additionalUncheckedUpdateOneWithoutIncumbentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutIncumbentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutIncumbentsNestedInput
  }

  export type studentsUpsertWithoutReported_commentsInput = {
    update: XOR<studentsUpdateWithoutReported_commentsInput, studentsUncheckedUpdateWithoutReported_commentsInput>
    create: XOR<studentsCreateWithoutReported_commentsInput, studentsUncheckedCreateWithoutReported_commentsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutReported_commentsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutReported_commentsInput, studentsUncheckedUpdateWithoutReported_commentsInput>
  }

  export type studentsUpdateWithoutReported_commentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUpdateOneWithoutStudentsNestedInput
    posts?: postsUpdateManyWithoutStudentsNestedInput
    comments?: commentsUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutReported_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    student_additional?: students_additionalUncheckedUpdateOneWithoutStudentsNestedInput
    posts?: postsUncheckedUpdateManyWithoutStudentsNestedInput
    comments?: commentsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutStudentsNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutStudentsNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type postsCreateManyIncumbentsInput = {
    id?: number
    studentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type commentsCreateManyIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type recommend_postsCreateManyIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsCreateManyIncumbentsInput = {
    id?: number
    commendId: number
    studentId?: number | null
    createdDate?: Date | string
  }

  export type reported_postsCreateManyIncumbentsInput = {
    id?: number
    postId: number
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsCreateManyIncumbentsInput = {
    id?: number
    commendId: number
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type postsUpdateWithoutIncumbentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutIncumbentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUpdateWithoutIncumbentsInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateOneWithoutRecommend_postsNestedInput
    post?: postsUpdateOneRequiredWithoutRecommend_postsNestedInput
  }

  export type recommend_postsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUpdateWithoutIncumbentsInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutRecommend_commentsNestedInput
    students?: studentsUpdateOneWithoutRecommend_commentsNestedInput
  }

  export type recommend_commentsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUpdateWithoutIncumbentsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: studentsUpdateOneWithoutReported_postsNestedInput
    post?: postsUpdateOneRequiredWithoutReported_postsNestedInput
  }

  export type reported_postsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUpdateWithoutIncumbentsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutReported_commentsNestedInput
    students?: studentsUpdateOneWithoutReported_commentsNestedInput
  }

  export type reported_commentsUncheckedUpdateWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUncheckedUpdateManyWithoutIncumbentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsCreateManyStudentsInput = {
    id?: number
    incumbentId?: number | null
    categoryId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type commentsCreateManyStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type recommend_postsCreateManyStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    createdDate?: Date | string
  }

  export type recommend_commentsCreateManyStudentsInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    createdDate?: Date | string
  }

  export type reported_postsCreateManyStudentsInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type reported_commentsCreateManyStudentsInput = {
    id?: number
    commendId: number
    incumbentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type postsUpdateWithoutStudentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateOneWithoutPostsNestedInput
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutStudentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUpdateWithoutStudentsInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutRecommend_postsNestedInput
    post?: postsUpdateOneRequiredWithoutRecommend_postsNestedInput
  }

  export type recommend_postsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUpdateWithoutStudentsInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutRecommend_commentsNestedInput
    incumbents?: incumbentsUpdateOneWithoutRecommend_commentsNestedInput
  }

  export type recommend_commentsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUpdateWithoutStudentsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutReported_postsNestedInput
    post?: postsUpdateOneRequiredWithoutReported_postsNestedInput
  }

  export type reported_postsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUpdateWithoutStudentsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutReported_commentsNestedInput
    incumbents?: incumbentsUpdateOneWithoutReported_commentsNestedInput
  }

  export type reported_commentsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    commendId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsCreateManyCategoriesInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    title: string
    content: string
    view?: number
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type postsUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutPostsNestedInput
    students?: studentsUpdateOneWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    recommend_posts?: recommend_postsUncheckedUpdateManyWithoutPostNestedInput
    reported_posts?: reported_postsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateManyPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    parentCommentId?: number | null
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type recommend_postsCreateManyPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type reported_postsCreateManyPostInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type commentsUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    parent?: commentsUpdateOneWithoutRepliesNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUpdateWithoutPostInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutRecommend_postsNestedInput
    students?: studentsUpdateOneWithoutRecommend_postsNestedInput
  }

  export type recommend_postsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_postsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUpdateWithoutPostInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutReported_postsNestedInput
    students?: studentsUpdateOneWithoutReported_postsNestedInput
  }

  export type reported_postsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_postsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateManyParentInput = {
    id?: number
    postId: number
    incumbentId?: number | null
    studentId?: number | null
    content: string
    recommend?: number
    reported?: number
    createdDate?: Date | string
    updatedDate?: Date | string
  }

  export type recommend_commentsCreateManyCommentInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    createdDate?: Date | string
  }

  export type reported_commentsCreateManyCommentInput = {
    id?: number
    incumbentId?: number | null
    studentId?: number | null
    reason: string
    createdDate?: Date | string
  }

  export type commentsUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutCommentsNestedInput
    students?: studentsUpdateOneWithoutCommentsNestedInput
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    replies?: commentsUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: commentsUncheckedUpdateManyWithoutParentNestedInput
    recommend_comments?: recommend_commentsUncheckedUpdateManyWithoutCommentNestedInput
    reported_comments?: reported_commentsUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    recommend?: IntFieldUpdateOperationsInput | number
    reported?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUpdateWithoutCommentInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutRecommend_commentsNestedInput
    students?: studentsUpdateOneWithoutRecommend_commentsNestedInput
  }

  export type recommend_commentsUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recommend_commentsUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUpdateWithoutCommentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    incumbents?: incumbentsUpdateOneWithoutReported_commentsNestedInput
    students?: studentsUpdateOneWithoutReported_commentsNestedInput
  }

  export type reported_commentsUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_commentsUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    incumbentId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IncumbentsCountOutputTypeDefaultArgs instead
     */
    export type IncumbentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncumbentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentsCountOutputTypeDefaultArgs instead
     */
    export type StudentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostsCountOutputTypeDefaultArgs instead
     */
    export type PostsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsCountOutputTypeDefaultArgs instead
     */
    export type CommentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use incumbentsDefaultArgs instead
     */
    export type incumbentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = incumbentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use incumbents_additionalDefaultArgs instead
     */
    export type incumbents_additionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = incumbents_additionalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use studentsDefaultArgs instead
     */
    export type studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = studentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use students_additionalDefaultArgs instead
     */
    export type students_additionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = students_additionalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postsDefaultArgs instead
     */
    export type postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use commentsDefaultArgs instead
     */
    export type commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = commentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use recommend_postsDefaultArgs instead
     */
    export type recommend_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = recommend_postsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reported_postsDefaultArgs instead
     */
    export type reported_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reported_postsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use recommend_commentsDefaultArgs instead
     */
    export type recommend_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = recommend_commentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reported_commentsDefaultArgs instead
     */
    export type reported_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reported_commentsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}