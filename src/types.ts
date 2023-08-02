/*
 * In some cases, components defined in the client facing OpenAPI spec may not
 * match up 1:1 with how the database is structured. For example, the
 * `reach` object returned by the legacy ".json/:state" endpoint, is not the
 * same as the `reach` object returned by the new "/reach/:reachId" endpoint.
 */

export type Reach = {
  id: number
  name: string
  section: string
}
