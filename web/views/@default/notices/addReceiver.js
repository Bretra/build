Tea.context(function () {
	this.$delay(function () {
		this.$find("form input[name='name']").focus();
	});

	/**
	 * 提交成功
	 */
	this.submitSuccess = function () {
		alert("保存成功");

		if (this.from.length == 0) {
			window.location = "/notices/level?level=" + this.level.code;
		} else {
			window.location = this.from;
		}
	};

	/**
	 * 媒介
	 */
	this.mediaId = "";
	if (this.medias.length > 0) {
		this.mediaId = this.medias[0].id;
	}
	this.mediaDescription = "";
	this.userDescription = "";

	this.changeMedia = function () {
		var that = this;
		var media = this.medias.$find(function (k, v) {
			return v.id == that.mediaId;
		});
		this.mediaDescription = media.mediaDescription;
		this.userDescription = media.userDescription;
	};

	if (this.mediaId.length > 0) {
		this.changeMedia();
	}

	/**
	 * 更多选项
	 */
	this.advancedOptionsVisible = false;

	this.showAdvancedOptions = function () {
		this.advancedOptionsVisible = !this.advancedOptionsVisible;
	};
});