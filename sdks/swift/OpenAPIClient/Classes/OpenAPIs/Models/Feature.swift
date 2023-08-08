//
// Feature.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

internal struct Feature: Codable, JSONEncodable, Hashable {

    internal enum ModelCharacter: String, Codable, CaseIterable {
        case access = "access"
        case hazard = "hazard"
        case other = "other"
        case surfSpot = "surf_spot"
        case portage = "portage"
        case putin = "putin"
        case rapid = "rapid"
        case takeout = "takeout"
        case waterfall = "waterfall"
    }
    /** The auto-generated id of the feature */
    internal var id: Int?
    /** The name of the feature */
    internal var name: String?
    internal var description: String?
    internal var distance: Double?
    internal var character: ModelCharacter?
    internal var reachId: Double?

    internal init(id: Int? = nil, name: String? = nil, description: String? = nil, distance: Double? = nil, character: ModelCharacter? = nil, reachId: Double? = nil) {
        self.id = id
        self.name = name
        self.description = description
        self.distance = distance
        self.character = character
        self.reachId = reachId
    }

    internal enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case name
        case description
        case distance
        case character
        case reachId
    }

    // Encodable protocol methods

    internal func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(description, forKey: .description)
        try container.encodeIfPresent(distance, forKey: .distance)
        try container.encodeIfPresent(character, forKey: .character)
        try container.encodeIfPresent(reachId, forKey: .reachId)
    }
}

