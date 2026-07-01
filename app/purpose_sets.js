// =========================================================
// Purpose Sets Helper
// 目的別問題集の取得・整形補助
//
// 注意：このファイルは目的別問題集UIの準備段階である。
// 現時点では、既存の出題・進捗・履歴には接続しない。
// =========================================================

(function () {
  "use strict";

  function getRawManifest() {
    return Array.isArray(window.PURPOSE_SETS_MANIFEST)
      ? window.PURPOSE_SETS_MANIFEST
      : [];
  }

  function clonePurposeSet(purposeSet) {
    return {
      ...purposeSet,
      questionSetScope: Array.isArray(purposeSet.questionSetScope)
        ? [...purposeSet.questionSetScope]
        : [],
      questions: Array.isArray(purposeSet.questions)
        ? purposeSet.questions.map((questionRef) => ({ ...questionRef }))
        : []
    };
  }

  function getAll() {
    return getRawManifest().map(clonePurposeSet);
  }

  function getById(purposeSetId) {
    return getAll().find((purposeSet) => purposeSet.purposeSetId === purposeSetId) || null;
  }

  function isDraft(purposeSet) {
    return purposeSet && purposeSet.status === "draft";
  }

  function isActive(purposeSet) {
    return purposeSet && purposeSet.status === "active";
  }

  function getQuestionCount(purposeSet) {
    return Array.isArray(purposeSet && purposeSet.questions)
      ? purposeSet.questions.length
      : 0;
  }

  function getDisplaySummary(purposeSet) {
    if (!purposeSet) {
      return "";
    }

    const title = purposeSet.title || purposeSet.purposeSetId || "無題の目的別問題集";
    const count = getQuestionCount(purposeSet);
    const status = purposeSet.status || "unknown";
    const mode = purposeSet.selectionMode || "unknown";

    return `${title}（${count}問 / ${status} / ${mode}）`;
  }

  function getDisplayItems() {
    return getAll().map((purposeSet) => ({
      purposeSetId: purposeSet.purposeSetId,
      title: purposeSet.title || purposeSet.purposeSetId || "無題の目的別問題集",
      description: purposeSet.description || "",
      purposeType: purposeSet.purposeType || "",
      status: purposeSet.status || "unknown",
      selectionMode: purposeSet.selectionMode || "unknown",
      questionCount: getQuestionCount(purposeSet),
      summary: getDisplaySummary(purposeSet)
    }));
  }

  window.PurposeSets = {
    getAll,
    getById,
    isDraft,
    isActive,
    getQuestionCount,
    getDisplaySummary,
    getDisplayItems
  };
})();
