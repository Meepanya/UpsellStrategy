import { Matcher, MatcherOptions } from "@testing-library/react";

export type GetByBoundAttribute = (
    text: Matcher, 
    options?: MatcherOptions | undefined, 
    waitForElementOptions?: unknown
) => HTMLElement
