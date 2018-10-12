/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Ensures `<iframe>` and `<frame>` elements contain a non-empty title attribute.
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all frame elements on the page have a title HTML attribute to describe their contents. This descriptive title is shown to users when no user action is required. */
  title: '`<frame>` or `<iframe>` elements have a title',
  /** Title of an accesibility audit that evaluates if all frame elements on the page have a title HTML attribute to describe their contents. This imperative title is shown to users when there is a failure that needs to be addressed. */
  failureTitle: '`<frame>` or `<iframe>` elements do not have a title',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'Screen reader users rely on frame titles to describe the contents of frames. ' +
      '[Learn more](https://dequeuniversity.com/rules/axe/2.2/frame-title?application=lighthouse).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class FrameTitle extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'frame-title',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

module.exports = FrameTitle;
module.exports.UIStrings = UIStrings;
