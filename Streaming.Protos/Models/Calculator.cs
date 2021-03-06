// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: calculator.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Streaming.Models {

  /// <summary>Holder for reflection information generated from calculator.proto</summary>
  public static partial class CalculatorReflection {

    #region Descriptor
    /// <summary>File descriptor for calculator.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static CalculatorReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChBjYWxjdWxhdG9yLnByb3RvEglzdHJlYW1pbmciKAoKQWRkUmVxdWVzdBIM",
            "CgRudW0xGAEgASgFEgwKBG51bTIYAiABKAUiHgoMQ2FsY1Jlc3BvbnNlEg4K",
            "BnJlc3VsdBgBIAEoBTJDCgpDYWxjdWxhdG9yEjUKA0FkZBIVLnN0cmVhbWlu",
            "Zy5BZGRSZXF1ZXN0Ghcuc3RyZWFtaW5nLkNhbGNSZXNwb25zZUITqgIQU3Ry",
            "ZWFtaW5nLk1vZGVsc2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Streaming.Models.AddRequest), global::Streaming.Models.AddRequest.Parser, new[]{ "Num1", "Num2" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Streaming.Models.CalcResponse), global::Streaming.Models.CalcResponse.Parser, new[]{ "Result" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class AddRequest : pb::IMessage<AddRequest> {
    private static readonly pb::MessageParser<AddRequest> _parser = new pb::MessageParser<AddRequest>(() => new AddRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AddRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Streaming.Models.CalculatorReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AddRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AddRequest(AddRequest other) : this() {
      num1_ = other.num1_;
      num2_ = other.num2_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AddRequest Clone() {
      return new AddRequest(this);
    }

    /// <summary>Field number for the "num1" field.</summary>
    public const int Num1FieldNumber = 1;
    private int num1_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Num1 {
      get { return num1_; }
      set {
        num1_ = value;
      }
    }

    /// <summary>Field number for the "num2" field.</summary>
    public const int Num2FieldNumber = 2;
    private int num2_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Num2 {
      get { return num2_; }
      set {
        num2_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AddRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AddRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Num1 != other.Num1) return false;
      if (Num2 != other.Num2) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Num1 != 0) hash ^= Num1.GetHashCode();
      if (Num2 != 0) hash ^= Num2.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Num1 != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Num1);
      }
      if (Num2 != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(Num2);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Num1 != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Num1);
      }
      if (Num2 != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Num2);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AddRequest other) {
      if (other == null) {
        return;
      }
      if (other.Num1 != 0) {
        Num1 = other.Num1;
      }
      if (other.Num2 != 0) {
        Num2 = other.Num2;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Num1 = input.ReadInt32();
            break;
          }
          case 16: {
            Num2 = input.ReadInt32();
            break;
          }
        }
      }
    }

  }

  public sealed partial class CalcResponse : pb::IMessage<CalcResponse> {
    private static readonly pb::MessageParser<CalcResponse> _parser = new pb::MessageParser<CalcResponse>(() => new CalcResponse());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<CalcResponse> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Streaming.Models.CalculatorReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CalcResponse() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CalcResponse(CalcResponse other) : this() {
      result_ = other.result_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CalcResponse Clone() {
      return new CalcResponse(this);
    }

    /// <summary>Field number for the "result" field.</summary>
    public const int ResultFieldNumber = 1;
    private int result_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Result {
      get { return result_; }
      set {
        result_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as CalcResponse);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(CalcResponse other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Result != other.Result) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Result != 0) hash ^= Result.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Result != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Result);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Result != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Result);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(CalcResponse other) {
      if (other == null) {
        return;
      }
      if (other.Result != 0) {
        Result = other.Result;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Result = input.ReadInt32();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
