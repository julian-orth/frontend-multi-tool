import { describe, it, expect } from "vitest";
import {
  getToolById,
  getToolsByGroup,
  getAllGroups,
  searchTools,
  getRelatedTools,
  TOOL_REGISTRY,
} from "../registry";

describe("Tool Registry", () => {
  describe("TOOL_REGISTRY", () => {
    it("should have tools defined", () => {
      expect(TOOL_REGISTRY).toBeDefined();
      expect(Array.isArray(TOOL_REGISTRY)).toBe(true);
      expect(TOOL_REGISTRY.length).toBeGreaterThan(0);
    });

    it("should have all required fields for each tool", () => {
      TOOL_REGISTRY.forEach((tool) => {
        expect(tool.id).toBeDefined();
        expect(tool.name).toBeDefined();
        expect(tool.description).toBeDefined();
        expect(tool.href).toBeDefined();
        expect(tool.group).toBeDefined();
        expect(tool.groupColor).toBeDefined();
        expect(tool.groupIcon).toBeDefined();
      });
    });

    it("should have unique tool IDs", () => {
      const ids = TOOL_REGISTRY.map((tool) => tool.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should have unique hrefs", () => {
      const hrefs = TOOL_REGISTRY.map((tool) => tool.href);
      const uniqueHrefs = new Set(hrefs);
      expect(uniqueHrefs.size).toBe(hrefs.length);
    });

    it("should have href matching pattern /tools/{id}", () => {
      TOOL_REGISTRY.forEach((tool) => {
        expect(tool.href).toBe(`/tools/${tool.id}`);
      });
    });

    it("should have kebab-case IDs", () => {
      const kebabCaseRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      TOOL_REGISTRY.forEach((tool) => {
        expect(tool.id).toMatch(kebabCaseRegex);
      });
    });
  });

  describe("getToolById", () => {
    it("should return tool for valid ID", () => {
      const tool = getToolById("json-formatter");
      expect(tool).toBeDefined();
      expect(tool?.id).toBe("json-formatter");
      expect(tool?.name).toBe("JSON Formatter");
    });

    it("should return undefined for invalid ID", () => {
      const tool = getToolById("non-existent-tool");
      expect(tool).toBeUndefined();
    });

    it("should return undefined for empty string", () => {
      const tool = getToolById("");
      expect(tool).toBeUndefined();
    });

    it("should be case-sensitive", () => {
      const tool = getToolById("JSON-FORMATTER");
      expect(tool).toBeUndefined();
    });

    it("should find all existing tools by their IDs", () => {
      TOOL_REGISTRY.forEach((expectedTool) => {
        const foundTool = getToolById(expectedTool.id);
        expect(foundTool).toEqual(expectedTool);
      });
    });
  });

  describe("getToolsByGroup", () => {
    it("should return tools for valid group", () => {
      const tools = getToolsByGroup("JSON");
      expect(Array.isArray(tools)).toBe(true);
      expect(tools.length).toBeGreaterThan(0);
      tools.forEach((tool) => {
        expect(tool.group).toBe("JSON");
      });
    });

    it("should return empty array for non-existent group", () => {
      const tools = getToolsByGroup("NonExistentGroup");
      expect(Array.isArray(tools)).toBe(true);
      expect(tools.length).toBe(0);
    });

    it("should return multiple tools for Color group", () => {
      const tools = getToolsByGroup("Color");
      expect(tools.length).toBeGreaterThan(1);
      tools.forEach((tool) => {
        expect(tool.group).toBe("Color");
      });
    });

    it("should be case-sensitive", () => {
      const tools = getToolsByGroup("json");
      expect(tools.length).toBe(0);
    });

    it("should return empty array for empty string", () => {
      const tools = getToolsByGroup("");
      expect(tools.length).toBe(0);
    });

    it("should return different tools for different groups", () => {
      const jsonTools = getToolsByGroup("JSON");
      const colorTools = getToolsByGroup("Color");
      expect(jsonTools).not.toEqual(colorTools);
    });
  });

  describe("getAllGroups", () => {
    it("should return array of group names", () => {
      const groups = getAllGroups();
      expect(Array.isArray(groups)).toBe(true);
      expect(groups.length).toBeGreaterThan(0);
    });

    it("should return unique groups", () => {
      const groups = getAllGroups();
      const uniqueGroups = new Set(groups);
      expect(uniqueGroups.size).toBe(groups.length);
    });

    it("should return sorted groups", () => {
      const groups = getAllGroups();
      const sortedGroups = [...groups].sort();
      expect(groups).toEqual(sortedGroups);
    });

    it("should include JSON and UUID groups", () => {
      const groups = getAllGroups();
      expect(groups).toContain("JSON");
      expect(groups).toContain("UUID");
    });

    it("should match groups from TOOL_REGISTRY", () => {
      const groups = getAllGroups();
      const registryGroups = new Set(TOOL_REGISTRY.map((tool) => tool.group));
      expect(groups.length).toBe(registryGroups.size);
      groups.forEach((group) => {
        expect(registryGroups.has(group as any)).toBe(true);
      });
    });
  });

  describe("searchTools", () => {
    it("should return all tools for empty query", () => {
      const results = searchTools("");
      expect(results).toEqual(TOOL_REGISTRY);
    });

    it("should return all tools for whitespace-only query", () => {
      const results = searchTools("   ");
      expect(results).toEqual(TOOL_REGISTRY);
    });

    it("should find tools by name", () => {
      const results = searchTools("JSON");
      expect(results.length).toBeGreaterThan(0);
      const jsonFormatter = results.find(
        (tool) => tool.id === "json-formatter"
      );
      expect(jsonFormatter).toBeDefined();
    });

    it("should find tools by description", () => {
      const results = searchTools("encoder");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should find tools by keywords", () => {
      const results = searchTools("uuid");
      expect(results.length).toBeGreaterThan(0);
      results.forEach((result) => {
        const hasKeyword = result.keywords?.some((keyword) =>
          keyword.toLowerCase().includes("uuid")
        );
        const hasInDescription = result.description
          .toLowerCase()
          .includes("uuid");
        const hasInName = result.name.toLowerCase().includes("uuid");
        expect(hasKeyword || hasInDescription || hasInName).toBe(true);
      });
    });

    it("should be case-insensitive", () => {
      const lowerResults = searchTools("json");
      const upperResults = searchTools("JSON");
      const mixedResults = searchTools("JsOn");
      expect(lowerResults).toEqual(upperResults);
      expect(upperResults).toEqual(mixedResults);
    });

    it("should find partial matches", () => {
      const results = searchTools("form");
      expect(results.length).toBeGreaterThan(0);
      // Should find "formatter"
      const hasFormatter = results.some((tool) =>
        tool.name.toLowerCase().includes("formatter")
      );
      expect(hasFormatter).toBe(true);
    });

    it("should return empty array for non-matching query", () => {
      const results = searchTools("xyznonexistent12345");
      expect(results.length).toBe(0);
    });

    it("should search across multiple fields", () => {
      const results = searchTools("base64");
      expect(results.length).toBeGreaterThan(0);
      const base64Tool = results.find((tool) => tool.id === "base64");
      expect(base64Tool).toBeDefined();
    });

    it("should trim whitespace from query", () => {
      const resultsNoSpace = searchTools("json");
      const resultsWithSpace = searchTools("  json  ");
      expect(resultsWithSpace).toEqual(resultsNoSpace);
    });
  });

  describe("getRelatedTools", () => {
    it("should return related tools for tool with relations", () => {
      const relatedTools = getRelatedTools("json-formatter");
      expect(Array.isArray(relatedTools)).toBe(true);
      if (relatedTools.length > 0) {
        relatedTools.forEach((tool) => {
          expect(tool).toBeDefined();
          expect(tool.id).toBeDefined();
        });
      }
    });

    it("should return empty array for tool without relations", () => {
      // Find a tool without relatedTools or create a test case
      const tool = TOOL_REGISTRY.find(
        (t) => !t.relatedTools || t.relatedTools.length === 0
      );
      if (tool) {
        const relatedTools = getRelatedTools(tool.id);
        expect(relatedTools).toEqual([]);
      }
    });

    it("should return empty array for non-existent tool", () => {
      const relatedTools = getRelatedTools("non-existent-tool");
      expect(relatedTools).toEqual([]);
    });

    it("should return valid tool objects", () => {
      const relatedTools = getRelatedTools("json-formatter");
      relatedTools.forEach((tool) => {
        expect(tool.id).toBeDefined();
        expect(tool.name).toBeDefined();
        expect(tool.href).toBeDefined();
      });
    });

    it("should filter out invalid tool IDs", () => {
      // This tests the internal filtering logic
      const relatedTools = getRelatedTools("json-formatter");
      relatedTools.forEach((tool) => {
        expect(tool).not.toBeUndefined();
      });
    });

    it("should not include the original tool in related tools", () => {
      const toolId = "json-formatter";
      const relatedTools = getRelatedTools(toolId);
      const includesSelf = relatedTools.some((tool) => tool.id === toolId);
      expect(includesSelf).toBe(false);
    });
  });

  describe("Data Integrity", () => {
    it("should have valid group colors", () => {
      const validColors = [
        "blue",
        "purple",
        "green",
        "orange",
        "pink",
        "red",
        "indigo",
        "cyan",
        "teal",
        "yellow",
      ];
      TOOL_REGISTRY.forEach((tool) => {
        expect(validColors).toContain(tool.groupColor);
      });
    });

    it("should have non-empty descriptions", () => {
      TOOL_REGISTRY.forEach((tool) => {
        expect(tool.description.length).toBeGreaterThan(0);
      });
    });

    it("should have reasonable description length for SEO", () => {
      TOOL_REGISTRY.forEach((tool) => {
        // SEO best practice: 50-160 characters, but we allow some flexibility
        expect(tool.description.length).toBeGreaterThan(20);
        expect(tool.description.length).toBeLessThan(250);
      });
    });

    it("should have tools with keywords array", () => {
      const toolsWithKeywords = TOOL_REGISTRY.filter(
        (tool) => tool.keywords && tool.keywords.length > 0
      );
      // Most tools should have keywords for SEO
      expect(toolsWithKeywords.length).toBeGreaterThan(
        TOOL_REGISTRY.length * 0.8
      );
    });

    it("should have valid related tool IDs", () => {
      TOOL_REGISTRY.forEach((tool) => {
        if (tool.relatedTools) {
          tool.relatedTools.forEach((relatedId) => {
            const relatedTool = getToolById(relatedId);
            expect(relatedTool).toBeDefined();
          });
        }
      });
    });

    it("should not have circular self-references in related tools", () => {
      TOOL_REGISTRY.forEach((tool) => {
        if (tool.relatedTools) {
          expect(tool.relatedTools).not.toContain(tool.id);
        }
      });
    });
  });

  describe("Performance", () => {
    it("should search efficiently through all tools", () => {
      const startTime = performance.now();
      searchTools("test query");
      const endTime = performance.now();
      // Should complete in less than 10ms
      expect(endTime - startTime).toBeLessThan(10);
    });

    it("should retrieve by ID efficiently", () => {
      const startTime = performance.now();
      for (let i = 0; i < 100; i++) {
        getToolById("json-formatter");
      }
      const endTime = performance.now();
      // 100 lookups should complete in less than 5ms
      expect(endTime - startTime).toBeLessThan(5);
    });
  });
});
