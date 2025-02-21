import { WebPlugin } from '@capacitor/core';
import type { ConvertHeicToJpegOptions, ConvertHeicToJpegResult, ConvertMovToMp4Options, ConvertMovToMp4Result, FilePickerPlugin, PermissionStatus, PickFilesOptions, PickFilesResult, PickImagesOptions, PickImagesResult, PickMediaOptions, PickMediaResult, PickVideosOptions, PickVideosResult, RequestPermissionsOptions } from './definitions';
export declare class FilePickerWeb extends WebPlugin implements FilePickerPlugin {
    readonly ERROR_PICK_FILE_CANCELED = "pickFiles canceled.";
    checkPermissions(): Promise<PermissionStatus>;
    convertHeicToJpeg(_options: ConvertHeicToJpegOptions): Promise<ConvertHeicToJpegResult>;
    convertMovToMp4(_options: ConvertMovToMp4Options): Promise<ConvertMovToMp4Result>;
    pickFiles(options?: PickFilesOptions): Promise<PickFilesResult>;
    pickImages(options?: PickImagesOptions): Promise<PickImagesResult>;
    pickMedia(options?: PickMediaOptions): Promise<PickMediaResult>;
    pickVideos(options?: PickVideosOptions): Promise<PickVideosResult>;
    requestPermissions(_options?: RequestPermissionsOptions): Promise<PermissionStatus>;
    private openFilePicker;
    private getDataFromFile;
    private getNameFromUrl;
    private getMimeTypeFromUrl;
    private getSizeFromUrl;
    private wait;
}
