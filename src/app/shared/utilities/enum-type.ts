/**
 * Helper type to work with const enums instead of Typescript's enum.
 *
 * @see https://fettblog.eu/tidy-typescript-avoid-enums/
 *
 * @usage
 * ```
 * const Status = {
 *   Admin: "Admin",
 *   User: "User",
 *   Moderator: "Moderator"
 * } as const;
 *
 * type StatusType = EnumType<typeof Status> // yields "Admin" | "User" | "Moderator"
 *
 * ```
 */
export type EnumType<T> = T[keyof T];